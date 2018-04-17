var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "presence"
});

module.exports.getUsMap = function(req, res, next) {
	var data = [];
	connection.query("SELECT state_resides_in, COUNT(employee_id_number) AS number_of_employees FROM od GROUP BY state_resides_in", function (err, result, fields) {
		if (err) throw err;
		for (var i = 0; i < result.length; i++) {
			data.push([result[i].state_resides_in, result[i].number_of_employees])
		}
		res.send(data);
	});
};

module.exports.getFunctionalCapability = function(req, res, next) {
	var data = [];
	connection.query("SELECT home_location, functional_capability, COUNT(employee_id_number) AS number_of_employees FROM presence.od GROUP BY home_location, functional_capability", function (err, result, fields) {
		if (err) throw err;
		for (var i = 0; i < result.length; i++) {
			data.push([result[i].home_location, result[i].functional_capability, result[i].number_of_employees])
		}
		res.send(data);
	});
};

module.exports.getCrossOrgCapability = function(req, res, next) {
	var data = [];
	connection.query("SELECT home_location, cross_org_capability, COUNT(employee_id_number) AS number_of_employees FROM presence.od GROUP BY home_location, cross_org_capability", function (err, result, fields) {
		if (err) throw err;
		for (var i = 0; i < result.length; i++) {
			data.push([result[i].home_location, result[i].cross_org_capability, result[i].number_of_employees])
		}
		res.send(data);
	});
};

module.exports.getRaceGenderAge = function(req, res, next) {
	var data = {race: [], gender: [], age: []};
	connection.query("SELECT race, count(race) AS race_count FROM presence.od where state_resides_in = '" + req.params['state'] + "' GROUP BY race", function (err, result, fields) {
		if (err) throw err;
		for (var i = 0; i < result.length; i++) {
			data.race.push([result[i].race, result[i].race_count])
		}
		connection.query("SELECT gender, count(gender) AS gender_count FROM presence.od where state_resides_in = '" + req.params['state'] + "' GROUP BY gender", function (err, result, fields) {
			if (err) throw err;
			for (var i = 0; i < result.length; i++) {
				data.gender.push([result[i].gender, result[i].gender_count])
			}
			connection.query("SELECT age, count(age) AS age_count FROM presence.od where state_resides_in = '" + req.params['state'] + "' GROUP BY age", function (err, result, fields) {
				if (err) throw err;
				for (var i = 0; i < result.length; i++) {
					data.age.push([result[i].age, result[i].age_count])
				}
				res.send(data);
			});
		});
	});
};