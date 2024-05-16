const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const route = require('./routes');
const methodOverride = require('method-override');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

app.use(methodOverride('_method'));

// Template engine
app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
		helpers: {
			eq: (a, b) => {
				if (a == b) return true;
				return false;
			},
		},
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
