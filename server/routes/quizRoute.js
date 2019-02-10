let router = require('express').Router();

var quizController = require('../controllers/quiz');

router.route('/quizzes')
    .get(quizController.index)
    .post(quizController.new);
router.route('/quizzes/:quiz_id')
    .get(quizController.view)
    .put(quizController.update)
    .delete(quizController.delete);

module.exports = router;