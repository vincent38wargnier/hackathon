const mongoose = require('mongoose');

const inputSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Input = mongoose.models.Input || mongoose.model('Input', inputSchema);

module.exports = Input;
