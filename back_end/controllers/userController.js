const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = async ({_id}) => {
    return await jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'});
}

const signup = async (req, res) => {
       const {name, email, password} = req.body;

       try {
           // Implement user creation logic here
            const user = await User.signup(name, email, password);

            const _id = user._id;
            const token = await createToken({_id});

           res.status(200).json({email,token,user});
       } catch (error) {
           res.status(400).json({ message: error.message });
       }
   };

const login = async (req,res) => {
    try {
        const {email, password} = req.body;

        const user = await User.login(email,password);
        console.log(user);
        const rightPassword = await bcrypt.compare(password, user.password);

        if (!rightPassword) {throw Error('Invalid email or password.')};

        const _id = user._id;
        const token = await createToken({_id});
        console.log(token);
        
        res.status(200).json({user,token});
       
    } catch(error) {
        res.status(400).json(`Error ${error.message}`);
       }
   };

module.exports = {signup,login};