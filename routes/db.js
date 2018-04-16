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