// backend/controllers/formController.js
const FormEntry = require('../models/formModel');

const saveFormEntry = async (req, res) => {
    const { name, number, email, message } = req.body;

    try {
        const newEntry = new FormEntry({ name, number, email, message });
        await newEntry.save();
        res.status(201).json({ message: 'Entry saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving entry', error });
    }
};

module.exports = { saveFormEntry };
