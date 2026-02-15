import { Request, Response } from "express";
import Poll from "../models/Poll";
import { generatePollId } from "../utils/generatePollId";

// Create Poll
export const createPoll = async (req: Request, res: Response) => {
  const { question, options, allowMultiple } = req.body;

  if (!question || options.length < 2) {
    return res.status(400).json({ message: "Invalid poll data" });
  }

  const poll = await Poll.create({
    pollId: generatePollId(),
    question,
    allowMultiple: allowMultiple === true, // ✅ STORE BOOLEAN
    options: options.map((text: string) => ({
      text,
      votes: 0
    }))
  });

  res.status(201).json(poll);
};


// Get Poll
export const getPoll = async (req: Request, res: Response) => {
  const poll = await Poll.findOne({ pollId: req.params.pollId });
  if (!poll) return res.status(404).json({ message: "Poll not found" });
  res.json(poll);
};

// Vote Poll
// export const votePoll = async (req: Request, res: Response) => {
//   const { pollId } = req.params;
//   const { optionIndex, fingerprint } = req.body;

//   const poll = await Poll.findOne({ pollId });
//   if (!poll) return res.status(404).json({ message: "Poll not found" });

//   // 🔍 Check if user already voted
//   const existingVote = poll.votes.find(
//     v => v.fingerprint === fingerprint
//   );

//   if (existingVote) {
//     // 🔄 SAME OPTION → do nothing
//     if (existingVote.optionIndex === optionIndex) {
//       return res.json(poll);
//     }

//     // ⬇️ REMOVE PREVIOUS VOTE
//     poll.options[existingVote.optionIndex].votes -= 1;

//     // 🔁 UPDATE STORED OPTION
//     existingVote.optionIndex = optionIndex;
//   } else {
//     // 🆕 FIRST TIME VOTE
//     poll.votes.push({ fingerprint, optionIndex });
//   }

//   // ⬆️ ADD NEW VOTE
//   poll.options[optionIndex].votes += 1;

//   await poll.save();
//   res.json(poll);
// };
export const votePoll = async (req: Request, res: Response) => {
  const { pollId } = req.params;
  const { optionIndexes, fingerprint } = req.body;

  const poll = await Poll.findOne({ pollId });
  if (!poll) {
    return res.status(404).json({ message: "Poll not found" });
  }

  // Normalize input
  const indexes: number[] = poll.allowMultiple
    ? optionIndexes
    : [optionIndexes[0]];

  // Validate indexes
  for (const i of indexes) {
    if (i < 0 || i >= poll.options.length) {
      return res.status(400).json({ message: "Invalid option index" });
    }
  }

  // Find previous vote
  const existingVote = poll.votes.find(
    v => v.fingerprint === fingerprint
  );

  if (existingVote) {
    // ⬇️ REMOVE OLD VOTES
    for (const oldIndex of existingVote.optionIndexes) {
      poll.options[oldIndex].votes = Math.max(
        0,
        poll.options[oldIndex].votes - 1
      );
    }

    // 🔄 UPDATE STORED VOTE
    existingVote.optionIndexes = indexes;
  } else {
    poll.votes.push({
      fingerprint,
      optionIndexes: indexes
    });
  }

  // ⬆️ ADD NEW VOTES
  for (const newIndex of indexes) {
    poll.options[newIndex].votes += 1;
  }

  await poll.save();
  return res.json(poll);
};
