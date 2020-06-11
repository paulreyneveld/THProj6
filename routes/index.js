const express = require('express');
const router = express.Router();
const data = require('../data.json')

console.log(data.projects[1].project_name);

router.get('/', (req, res) => {
	res.render('index', data);
});

router.get('/about', (req, res) => {
        res.render('about');
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	res.locals.project_name =  data.projects[id].project_name;
	res.locals.description = data.projects[id].description;
	res.locals.technologies = data.projects[id].technologies;
	res.locals.github_link = data.projects[id].github_link;
	const idObj = { id };
		
	res.render('project', idObj);
});

module.exports = router;
