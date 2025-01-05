const express = require('express');
const cors = require('cors');
const db_connect = require('./config/config')
const toDoRoutes = require('./routes/routes')

const app = express();

app.use(express.json());
app.use(cors());

db_connect();

app.use(toDoRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})