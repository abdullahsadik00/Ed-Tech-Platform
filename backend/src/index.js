const express = require('express');
const app = express();
const database = require('./config/db');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const {cloudinaryConnect} = require('./config/cloudinary');