const mongoose = require('mongoose');

const db_connect = () =>{
    try {
        
        mongoose
        .connect('mongodb://localhost:27017/to_do_app');
        console.log("connected to MongoDB");
    } catch (error) {
        console.error("mongodb se connection me dikkat.",error)};

    }

module.exports = db_connect;