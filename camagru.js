const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const port = process.env.PORT || 3000

app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));

app.listen(port, () => console.log(
	`Express started on http://localhost:${port};` +
	'Press Ctrl+C to terminate'))
