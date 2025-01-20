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
    },
    completed: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true
    }
);



const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("Todo",todoSchema);