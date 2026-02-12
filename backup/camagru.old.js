// Import express library (express is a function)
const express = require('express');
// create the server(app) by launching express()
const app = express();
// Import express-handlebars to create dynamic html (Views engine)
const {engine} = require('express-handlebars');
// Assign port from env $PORT or by default 3000
const port = process.env.PORT || 3000

// Dire a Express d'utiliser ce moteur de templates
app.engine('handlebars', engine({ defaultLayout: 'main' }));

// Definis la racine du path
app.use(express.static(__dirname + '/public'))
// Assigne le nom view engine a handlebars (mais ca sert a quoi concretement???)
app.set('view engine', 'handlebars');

// Definition d'une route. Des qu'elle est appellee, render la view 'home' et envoie la string HTML au client
app.get('/', (req, res) => res.render('home'));

// Le serveur est mis en ecoute, la fonction callback s'execute a ce moment la (elle a ete executee)
app.listen(port, () => console.log(
	`Express started on http://localhost:${port};` +
	'Press Ctrl+C to terminate'))

/*
	Basic structure for handlebars
	.
	├── app.js
	└── views
		├── home.handlebars
		└── layouts
			└── main.handlebars
*/

