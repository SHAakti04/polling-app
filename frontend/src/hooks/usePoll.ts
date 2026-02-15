import axios from "axios";
import { useEffect, useState } from "react";
import { socket } from "../services/socket";

const API = import.meta.env.VITE_API_URL;

export const usePoll = (pollId: string) => {
  const [poll, setPoll] = useState<any>(null);

  useEffect(() => {
    axios.get(`${API}/api/polls/${pollId}`).then(res => setPoll(res.data));

    socket.emit("join-poll", pollId);
    socket.on("poll-updated", setPoll);

    return () => {
      socket.off("poll-updated");
    };
  }, [pollId]);

  return poll;
};
