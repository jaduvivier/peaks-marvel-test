const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

const serviceAccount = require('./utils/peaks-marvel-duvivier-firebase-adminsdk-4fap0-a0e7af2ae0');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://peaks-marvel-duvivier.firebaseio.com'
});

const app = express();

/* Controllers */

const cc = require('./controllers/character-controller');

/* Routes */

app.route('/')
    .get( cc.getListPage );
app.route('/character/:charId/:charName')
    .get( cc.getCharacterPage );
app.route('/:anythingElse')
    .get((req, res, next) => {
        res.redirect('/404.html');
    });

exports.app = functions.https.onRequest(app);