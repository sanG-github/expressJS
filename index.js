const express = require('express')
const bodyParser = require('body-parser')
var userRoute = require('./routes/users.route.js')

const port = 3000;
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req,res) => res.render('index', {
	name: 'Sang'
}));

app.use('/users', userRoute);

app.listen(port, () => console.log("listen on port " + port));
