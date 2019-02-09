Question = require('../models/question');

// get questions
exports.index = function (req, res) {
    Question.get(function (err, question) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
        res.json({
            status: "success",
            message: "Questions retrieved successfully",
            data: question
        });
        }
    });
};

//create new question
exports.new = function (req, res) {
    var question = new Question();
    question.questionText = req.body.questionText;
    question.questionType = req.body.questionType;
    question.option = req.body.option;
    question.correctOption = req.body.correctOption;
    question.solution = req.body.solution;
    question.difficulty = req.body.difficulty;

    question.save(function (err) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                        message: 'New question created!',
                        data: question
                    });
            }
        });
    
};

//view specific question
exports.view = function (req, res) {
    Question.findById(req.params.question_id, function (err, question) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                message: 'Question details loading..',
                data: question
            });
        }
    });
};

//update question
exports.update = function (req, res) {
Question.findById(req.params.question_id, function (err, question) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }

        else{
            question.questionText = req.body.questionText;
            question.questionType = req.body.questionType;
            question.option = req.body.option;
            question.correctOption = req.body.correctOption;
            question.solution = req.body.solution;
            question.difficulty = req.body.difficulty;

                question.save(function (err) {
                    if (err){
                            res.json({
                                status: "error",
                                message: err,
                            });
                        }
                        else{
                            res.json({
                                message: 'Question Info updated',
                                data: question
                            });
                        }
                });
        }
    });
};

//delete question
exports.delete = function (req, res) {
    Question.remove({
        _id: req.params.question_id
    }, function (err, question) {
        if (err){
            res.json({
                status: "error",
                message: err,
            });
        }
        else{
            res.json({
                        status: "success",
                        message: 'Question deleted'
                    });
            }
    });
};