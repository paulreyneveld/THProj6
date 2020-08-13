const express = require('express');
const JSONdata = require('./data.json');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

// Requires routing locations
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

// Defines project routing
app.use(mainRoutes);
app.use('/projects', projectRoutes);

// Generic error handler for not found
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Generic error handler for server error
app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

// Opens up port 3000 to run as a webserver
app.listen(3000, () => {
	console.log('This app is running on port 3000!');
});
