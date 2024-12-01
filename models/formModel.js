const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FormEntry = mongoose.model('FormEntry', formSchema);

module.exports = FormEntry;
