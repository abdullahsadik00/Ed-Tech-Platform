const express = require('express');
const app = express();
const database = require('./config/db');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const {cloudinaryConnect} = require('./config/cloudinary');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}))

app.use(express.json());

app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).json({
        hasError: false,
        message: 'Welcome to the Ed-Tech API',
    })
})

app.listen(PORT, (req, res)=>{
    console.log(`Server running on port ${PORT}`);
    database.connect();
    cloudinaryConnect();
    console.log('Connected to MongoDB');
})