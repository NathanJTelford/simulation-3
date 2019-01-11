require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const Ctrl = require('./authCtrl');
const route = require('./../src/routes')

const {SERVER_PORT,SECRET,SERVER_CONNECTION} = process.env;

const app = express();
app.use(express.json());
app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized:false
    
}))


// app.use( express.static(path.join(`${__dirname/../build}`));


app.post('/auth/register', Ctrl.register);
app.post('/auth/login',Ctrl.login);


massive(SERVER_CONNECTION).then(db=> {
    app.set('db',db);
    app.listen(SERVER_PORT,()=>console.log('Battle Cruiser Operational'))

})
