import { useState } from "react";
import confetti from "canvas-confetti";
import VoteOption from "./VoteOption";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function PollRoom({ poll, refreshPoll }: any) {
  if (!poll) return null;

  // 🔐 Stable fingerprint
  const fingerprint =
    localStorage.getItem("fp") || crypto.randomUUID();
  localStorage.setItem("fp", fingerprint);

  const allowMultiple = poll.allowMultiple === true;

  const [selected, setSelected] = useState<number[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalVotes = poll.options.reduce(
    (sum: number, o: any) => sum + o.votes,
    0
  );

  const leadingVotes = Math.max(
    ...poll.options.map((o: any) => o.votes),
    0
  );

  // 🎯 OPTION SELECT
  const toggleOption = (index: number) => {
    if (submitting) return;

    if (allowMultiple) {
      setSelected(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setSelected([index]);
    }

    // 📱 HAPTIC
    navigator.vibrate?.(10);
  };

  // 🚀 SUBMIT / UPDATE VOTE
  const submitVote = async () => {
    if (!selected.length) return;

    setSubmitting(true);

    await fetch(
      `${import.meta.env.VITE_API_URL}/api/polls/${poll.pollId}/vote`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          optionIndexes: selected,
          fingerprint
        })
      }
    );

    await refreshPoll();

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 }
    });

    setSubmitting(false);
  };

  // 🔗 SHARE POLL (AUTO COPY)
  const sharePoll = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Card>
      {/* QUESTION */}
      <h2 className="text-lg font-semibold mb-1">
        {poll.question}
      </h2>

      {/* MULTI INFO */}
      {allowMultiple && (
        <p className="text-xs text-indigo-300 mb-2">
          You can change your selection anytime
        </p>
      )}

      {/* SHARE BUTTON */}
      <div className="flex items-center gap-2 mb-3">
        <Button
          onClick={sharePoll}
          className="text-xs px-3 py-1.5"
        >
          🔗 Share Poll
        </Button>

        {copied && (
          <span className="text-xs text-emerald-300">
            Copied!
          </span>
        )}
      </div>

      {/* OPTIONS */}
      <div className="space-y-2">
        {poll.options.map((o: any, i: number) => (
          <VoteOption
            key={i}
            option={o}
            selected={selected.includes(i)}
            disabled={submitting}
            totalVotes={totalVotes}
            isLeading={o.votes === leadingVotes && leadingVotes > 0}
            onClick={() => toggleOption(i)}
          />
        ))}
      </div>

      {/* SUBMIT */}
      <Button
        className="w-full py-2 mt-4"
        onClick={submitVote}
        disabled={!selected.length || submitting}
      >
        {submitting ? "Updating vote..." : "Submit / Update Vote"}
      </Button>
    </Card>
  );
}
