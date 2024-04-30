const express = require('express');
const routers = require('./libs/routes/routes');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

//middleware for handling form data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(routers);

app.set('view engine', 'ejs')
app.set('views', 'app')

app.listen('5000', ()=>{
    console.log("Server running ...........")
})