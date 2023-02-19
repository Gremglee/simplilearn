const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {
    allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

var app = express()

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send('
    <h2>Welcome to student database!</h2>
    ')
})

app.listen(3000, () => {
    console.log('server started on port 3000');
});