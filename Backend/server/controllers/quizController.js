const Learner = require('../models/Learner');
const Question = require('../models/Question');
const { selectNextQuestion } = require('../utils/rulesEngine');

exports.getQuiz = async (req, res) => {
  const learner = await Learner.findOne(); // sample, replace with auth
  const questions = await Question.find();
  const rules = {}; // Load or define rules
  const nextQuestion = selectNextQuestion(learner, questions, rules);
  res.json({ question: nextQuestion });
};
