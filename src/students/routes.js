const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getStudents);
router.post('/', controller.addStudents);
router.get('/:id', controller.getStudentsByID);
router.delete('/:id', controller.removeStudent);
router.patch('/:id', controller.editStudent);



module.exports = router;