const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const {client} = require('./db')
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const userRoute = require('./routes/user')

app.use('/',userRoute)
app.listen(process.env.PORT,()=>{console.log('Server running on 3000')})