const functions = require('firebase-functions');

const { admin, db } = require('./util/admin');
const cors = require('cors');

const { signup, login } = require('./handlers/users');

const express = require('express');
const app = express();

let whitelist = ['http://localhost:4200', 'https://vastdime.com']
let corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
        /*
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
        */
    }
}

app.use(cors(corsOptions));

app.post('/login', login);
app.post('/signup', signup);

exports.api = functions.https.onRequest(app);
