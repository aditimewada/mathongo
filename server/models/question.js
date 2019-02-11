const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var QuestionSchema = new mongoose.Schema(
  {
      questionText: String,
      questionType: String,
      option: [String],
      correctOption: [Number],
      solution: String,
      difficulty: Number
  });

// const QuestionCollection = mongoose.model('Question', QuestionSchema);

// module.exports = QuestionCollection

var Question = module.exports = mongoose.model('Question', QuestionSchema);
module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
}