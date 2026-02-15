import rateLimit from "express-rate-limit";

// 🚦 ONLY FOR POLL CREATION
export const apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 20, // 20 polls per IP
  message: "Too many polls created. Try later."
});
