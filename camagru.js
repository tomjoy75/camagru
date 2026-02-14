const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
// const fortune = require('./lib/fortune');
const handlers = require('./lib/handlers');
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'handlebars');

app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/login', handlers.login);
app.get('/register', handlers.register);

// Custom 404 page
app.use(handlers.notfound);

// Custom 500 page
app.use(handlers.serverError);

app.listen(port, () => console.log(
	`Express started on http://localhost:${port};` +
	'Press Ctrl+C to terminate'))
