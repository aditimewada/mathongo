let router = require('express').Router();

var questionController = require('../controllers/question');

router.route('/questions')
    .get(questionController.index)
    .post(questionController.new);
router.route('/questions/:question_id')
    .get(questionController.view)
    .put(questionController.update)
    .delete(questionController.delete);

module.exports = router;