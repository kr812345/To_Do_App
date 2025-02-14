const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
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

userSchema.statics.signup = async function(name,email,password) {
    if (!name || !email || !password) {
        throw Error('all fields must be filled.');
    }

    if (!validator.isEmail(email)) {
        throw Error('Invalid Email.');
    }

    if (!validator.isStrongPassword(password)) {
        throw Error('Password is weak.');
    }

    const exists = await this.findOne({email});
    if (exists) {
        throw Error('Email already in use.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({ name, email, password: hash });

    return user;
}

userSchema.statics.login = async function(email,password) {
    if (!email || !password) {
        throw Error('All field must be filled.');
    }

    const user = await this.findOne({email});

    if (!user) { throw Error('Wrong Email.')};

    return user;
}

module.exports = mongoose.model("User", userSchema);