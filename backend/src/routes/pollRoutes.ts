import { Router } from "express";
import { createPoll, getPoll, votePoll } from "../controllers/pollController";
import { apiLimiter } from "../middleware/rateLimiter";

const router = Router();

// ✅ Rate-limit ONLY poll creation
router.post("/", apiLimiter, createPoll);

// ❌ No rate limit on voting
router.get("/:pollId", getPoll);
router.post("/:pollId/vote", votePoll);

export default router;
