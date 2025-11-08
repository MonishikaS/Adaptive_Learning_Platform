const mongoose = require('mongoose');
const LearnerSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: { type: String, default: 'student' },
  mastery: [
    { topic: String, score: Number }
  ],
  attempts: [
    { questionID: String, correct: Boolean, timestamp: Date }
  ]
});
module.exports = mongoose.model('Learner', LearnerSchema);
