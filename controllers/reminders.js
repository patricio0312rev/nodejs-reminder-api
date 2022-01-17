const Reminders = require('../models/reminders');
const {Op} = require('sequelize');
const Reminder = require('../models/reminders');

class ReminderController {
    // Usando sequalize en memoria
    async createReminder(req, res) {
        try {
            const { body } = req;
            const data = await ReminderModel.findAll({});

            body.id = data.length + 1;
            const response = await ReminderModel.create(body);
            res.status(201).json(response);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = {

}
