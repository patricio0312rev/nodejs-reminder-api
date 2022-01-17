const router = require('express').Router();
const controller = require('../controllers/reminders');

router.post('/', controller.createReminder);
router.get('/', controller.getAllReminders);
router.get('/:id', controller.getReminderById);
router.put('/:id', controller.updateReminderById);
router.patch('/:id', controller.updateReminderById);
router.delete('/:id', controller.updateReminderById);

module.exports = router;
