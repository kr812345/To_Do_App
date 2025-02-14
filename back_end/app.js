const express = require('express');
const cors = require('cors');
const db_connect = require('./config/config')
const toDoRoutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

db_connect();

app.use('/api',toDoRoutes);
app.use('/api/user',userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})