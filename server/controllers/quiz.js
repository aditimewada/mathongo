Quiz = require('../models/quiz');

// get quizzes
exports.index = function (req, res) {
    Quiz.get(function (err, quiz) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
        res.json({
            status: "success",
            message: "Quizzes retrieved successfully",
            data: quiz
        });
        }
    });
};

//create new quiz
exports.new = function (req, res) {
    var quiz = new Quiz();
    quiz.title = req.body.title;
    quiz.marks = req.body.marks;
    quiz.negativeMarks = req.body.negativeMarks;
    quiz.questions = req.body.questions;

    quiz.save(function (err) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                        message: 'New quiz created!',
                        data: quiz
                    });
            }
        });
    
};

//view specific quiz
exports.view = function (req, res) {
    Quiz.findById(req.params.quiz_id, function (err, quiz) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                message: 'Quiz details loading..',
                data: quiz
            });
        }
    });
};

//update question
exports.update = function (req, res) {
Quiz.findById(req.params.quiz_id, function (err, quiz) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }

        else{
            quiz.title = req.body.title;
            quiz.marks = req.body.marks;
            quiz.negativeMarks = req.body.negativeMarks;
            quiz.questions = req.body.questions;

                quiz.save(function (err) {
                    if (err){
                            res.json({
                                status: "error",
                                message: err,
                            });
                        }
                        else{
                            res.json({
                                message: 'quiz Info updated',
                                data: quiz
                            });
                        }
                });
        }
    });
};

//delete quiz
exports.delete = function (req, res) {
    Quiz.remove({
        _id: req.params.quiz_id
    }, function (err, quiz) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                        status: "success",
                        message: 'Quiz deleted'
                    });
            }
    });
};