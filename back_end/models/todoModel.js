const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['high','medium','low']
    },
    completed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Todo",todoSchema);