const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const port = process.env.PORT || 3000

app.engine('handlebars', engine({ defaultLayout: 'main' }));

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(
	`Express started on http://localhost:${port};` +
	'Press Ctrl+C to terminate'))
