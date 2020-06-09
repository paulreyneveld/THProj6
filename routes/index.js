const express = require('express');
const router = express.Router();
const data = require('../data.json')

router.get('/', (req, res) => {
	const aboutLink = '/about';
	res.render('index');
});

router.get('/about', (req, res) => {
        res.render('about');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const title = data.projects[id].project_name;
	const description = data.projects[id].description;
	const technologies = data.projects[id].technologies;
	const github_link = data.projects[id].github_link;
	const projData = { id, title, description, technologies, github_link };

	res.render('project', projData);
});

module.exports = router;
