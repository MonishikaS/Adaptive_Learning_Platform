const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  type: String,
  content: String,
  options: [String],
  answer: String,
  explanation: String,
  tags: [String],
  difficulty: String
});
module.exports = mongoose.model('Question', QuestionSchema);
