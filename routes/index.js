var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		name: {
			first: "Hugo",
			last: "Sabourin"
		},
		description: '<span class="tabulation"></span>\
			Passionate <em class="bold">Developper</em> trained\
			at two prestigious <em class="bold">42</em> campuses in Paris and in Fremont CA.<br><br>\
			I can adapt to any method on any language with any\
			framework. For the moment I master <em class="bold">C</em> and <em class="bold">JS</em>. I have\
			strong knowledge of UNIX and Linux systems. As a plus,\
			I can use <em class="bold">Adobe’s</em> and <em class="bold">Autodesk’s</em> flagships such as\
			Photoshop and 3ds Max.'
	});
});

module.exports = router;
