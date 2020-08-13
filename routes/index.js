const express = require('express');
const router = express.Router();
const data = require('../data.json')

// Renders index pug template on navigation to root
router.get('/', (req, res) => {
	res.render('index', data);
});

// Renders about pug template on navigation to /about
router.get('/about', (req, res) => {
        res.render('about');
});

// Dynmically renders project based on URL req parameter /projects/:id
router.get('/projects/:id', (req, res) => {
	const id = req.params.id;
	// Verbose data assignment for use in PUG template on a project by project basis
	res.locals.project_name =  data.projects[id].project_name;
	res.locals.description = data.projects[id].description;
	res.locals.technologies = data.projects[id].technologies;
	res.locals.github_link = data.projects[id].github_link;
	res.locals.img_url_landscape = '../' + data.projects[id].img_urls[1];
	// Package id param in object
	const idObj = { id };
		
	res.render('project', idObj);
});

module.exports = router;
