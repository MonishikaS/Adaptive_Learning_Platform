const express = require('express');
const { getQuiz } = require('../controllers/quizController');
const router = express.Router();
router.get('/adaptive', getQuiz);
module.exports = router;
