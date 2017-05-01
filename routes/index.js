var express = require('express');
var router = express.Router();
var low = require('lowdb');
var Cortana = require('../Cortana');
Cortana = new Cortana();

var bdd = new Object();

bdd.projects = low("databases/projects.json");
bdd.owner = low("databases/main.json");
bdd.config = low("databases/config.json");

/* GET home page. */
router.get('/', function(req, res, next) {
	var config = Cortana.getFrontEndConfig(bdd.config);
	var projects = Cortana.getProjects(bdd.projects, 0);
	var owner = Cortana.getOwnerInfos(bdd.owner);
	
	res.render('index', {
		css: "index",
		title: owner.name.first + " " + owner.name.last,
		owner,
		projects,
		config
	});
});

router.get('/project/:project_route', function(req, res, next) {
	var project_route = req.params.project_route;

	var config = Cortana.getFrontEndConfig(bdd.config);
	var project = Cortana.getProjectByRoute(bdd.projects, project_route);
	var owner = Cortana.getOwnerInfos(bdd.owner);
	
	res.render('project', {
		css: "project",
		title: project.name,
		owner,
		project,
		config
	});
});

module.exports = router;