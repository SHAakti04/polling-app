const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  pollId: {
    type: String,
    required: true
  },
  userFingerprint: {
    type: String,
    required: true
  },
  optionIndex: {
    type: Number,
    required: true
  },
  ipAddress: {
    type: String,
    required: true
  },
  votedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Vote', voteSchema);
