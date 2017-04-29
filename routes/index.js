var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		name: {
			first: "Hugo",
			last: "Sabourin"
		},
		description: '<span class="tabulation"></span>Passionate <em class="bold">Developper</em> trained\
			at two prestigious <em class="bold">42</em> campuses in Paris and in Fremont CA.<br><br>\
			<span class="tabulation"></span>I can adapt to any method on any language with any\
			framework. For the moment I master <em class="bold">C</em> and <em class="bold">JS</em>. I have\
			strong knowledge of UNIX and Linux systems. As a plus,\
			I can use <em class="bold">Adobe’s</em> and <em class="bold">Autodesk’s</em> flagships such as\
			Photoshop and 3ds Max.',
		projects: [
			{
				short: "Scortex",
				name: "Internship at Scortex",
				date: "2017",
				desImage: "images/scortex.png",
				skills: [
					{
						value: "Internship",
						highlight: true
					},
					{
						value: "Deep Learning",
						highlight: false
					}
				],
				description: '<span class="tabulation"></span>A formidable Internship in a great startup.\
					For my first internship I had the chance to do it in the <em class="bold">deep learning</em> field.\
					During all my internship I read a lot of scientific papers about maths,\
					neural networks optimisations or even consciousness !'
			},
			{
				short: "This website",
				name: "My own Portfolio",
				date: "May 2017",
				desImage: "images/golden.png",
				skills: [
					{
						value: "NodeJS",
						highlight: true
					},
					{
						value: "Express",
						highlight: false
					}
				],
				description: '<span class="tabulation"></span>This website has been the occasion to put my hands on NodeJS.\
					I used Express, PugJS, Sass... I discovered a lot about website development.\
					I also challenged myself on the design, as you can see, this website is entirely at golden ratio !\
					This has been a good practice on Illustrator and CSS. My web-design skills are definitly better than before.'
			},
			{
				short: "RayTracer",
				name: "RayTracer",
				date: "April 2017",
				skills: [
					{
						value: "42 Project",
						highlight: false
					},
					{
						value: "C",
						highlight: false
					},
					{
						value: "Geometry",
						highlight: false
					}
				]
			},
			{
				short: "Wolf3D",
				name: "Wolf3D",
				date: "Jan. 2017",
				skills: [
					{
						value: "42 Project",
						highlight: false
					},
					{
						value: "C",
						highlight: false
					},
					{
						value: "Linear Algebra",
						highlight: false
					}
				]
			},
			{
				short: "Fract'ol",
				name: "Fract'ol",
				date: "Jan. 2017",
				skills: [
					{
						value: "42 Project",
						highlight: false
					},
					{
						value: "C",
						highlight: false
					},
					{
						value: "Complex numbers",
						highlight: false
					}
				]
			},
			{
				short: "FdF",
				name: "FdF",
				date: "Dec. 2016",
				skills: [
					{
						value: "42 Project",
						highlight: false
					},
					{
						value: "C",
						highlight: false
					},
					{
						value: "Rasterization",
						highlight: false
					}
				]
			}
		]
	});
});

module.exports = router;