const express = require('express');
const JSONdata = require('./data.json');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.listen(3000, () => {
	console.log('This app is running on port 3000!');
});
