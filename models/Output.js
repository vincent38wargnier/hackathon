const mongoose = require('mongoose');

const outputSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    type: {
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

const Output = mongoose.models.Output || mongoose.model('Output', outputSchema);

module.exports = Output;