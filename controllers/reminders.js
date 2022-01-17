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

    async getAllReminders(req, res) {
        const { user, after } = req.query;

        let data = [];
        if (user && after) {
            // No está claro en la pregunta
            data = await ReminderModel.findAll({
                where: {
                    [Op.and]: [{date: { [Op.gte] : new Date(Number(after).toISOString()) } }, { user }],
                },
            });
        } else if (user) {
            data = await ReminderModel.findAll({
                where: {
                    user,
                },
            });
        } else if (after) {
            data = await ReminderModel.findAll({
                where: {
                    data: { [Op.gte] : new Date(Number(after)).toISOString() },
                },
            });
        } else {
            data = await Remindermodel.findAll({});
        }

        res.status(200).json(data);
    }
}

module.exports = {

}
