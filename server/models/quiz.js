const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var QuizSchema = new mongoose.Schema(
  {
     title: String,
     marks: Number,
     negativeMarks: Number,
     questions: [
      { 
        q_id: {type: ObjectId, ref: "QuestionCollection" }
      }
     ] 
  });

var Quiz = module.exports = mongoose.model('Quiz',QuizSchema);
module.exports.get = function (callback, limit) {
    Quiz.find(callback).limit(limit);
}