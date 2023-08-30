const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const knex = require('knex')(require('./knexfile').development);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// TODO for Duckie: Set up Passport.js for user authentication
// TODO for Duckie: Define routes for user login/signup, channel creation/invitation, video upload/approval
// TODO for Duckie: Define functions for sending email and WhatsApp notifications
// TODO for Duckie: Define function for uploading video to YouTube

app.listen(3000, () => console.log('Server running on port 3000'));