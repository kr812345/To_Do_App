const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MongodbURI;

const db_connect = () =>{
    try {
        mongoose
            .connect(URI)
            .then(() => console.log("Connected to MongoDB"))
        } catch(error) {
            ((error) => console.error("Error connecting to MongoDB:", error));
            }
        }
module.exports = db_connect;