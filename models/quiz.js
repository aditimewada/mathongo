const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var QuizSchema = new mongoose.Schema(
  {
     title: String,
     marks: Number,
     negativeMarks: Number,
     questions_id: { type: ObjectId, ref: "QuestionCollection" }  
  });

const QuizCollection = mongoose.model('Quiz', QuizSchema);

module.exports = QuizCollection