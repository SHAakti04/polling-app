import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../services/socket";
import PollRoom from "../components/PollRoom";
import Card from "../components/ui/Card";

const API = import.meta.env.VITE_API_URL;

export default function PollPage() {
  const { pollId } = useParams();
  const [poll, setPoll] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔄 FETCH POLL
  const fetchPoll = async () => {
    try {
      const res = await fetch(`${API}/api/polls/${pollId}`);
      if (!res.ok) throw new Error("Poll not found");
      const data = await res.json();
      setPoll(data);
    } catch (err) {
      setError("Poll not found or expired");
    } finally {
      setLoading(false);
    }
  };

  // 🔌 SOCKET + INITIAL LOAD
  useEffect(() => {
    fetchPoll();

    socket.on("poll-updated", (updatedPollId: string) => {
      if (updatedPollId === pollId) {
        fetchPoll();
      }
    });

    return () => {
      socket.off("poll-updated");
    };
  }, [pollId]);

  // ⏳ LOADING STATE
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        Loading poll...
      </div>
    );
  }

  // ❌ ERROR STATE
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-300">
        {error}
      </div>
    );
  }

  // ✅ RENDER POLL
  return (
    <div className="min-h-screen flex justify-center items-center px-4 mb-10">
      <Card>
        <PollRoom poll={poll} refreshPoll={fetchPoll} />
      </Card>
    </div>
  );
}
