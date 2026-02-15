import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PollPage from "./pages/PollPage";
import AppLayout from "./layouts/AppLayout";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poll/:pollId" element={<PollPage />} />
      </Routes>
    </AppLayout>
  );
}
