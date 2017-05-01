var Cortana = function() {

	this.getProjects = function(bdd, limit_projects) {
		var res;

		if (limit_projects) {
			res = (bdd.get('projects').sortBy('order').take(limit).value());
		} else {	
			res = (bdd.get('projects').sortBy('order').value());
		}
		return (res);
	}

	this.getProjectByRoute = function(bdd, project_route) {
		return (bdd.get('projects').find({ route: project_route }).value());
	}

	this.getOwnerInfos = function (bdd) {
		return (bdd.get('owner').value());
	}

	this.getFrontEndConfig = function (bdd) {
		return (bdd.get('config').get("frontend").value());
	}
}

module.exports = Cortana;