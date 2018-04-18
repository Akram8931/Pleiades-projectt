var db = require('./db');
var jwt = require('jsonwebtoken');

exports.login = function(req, res, next) {
	var username=req.body.username;
 	var password=req.body.password;
 	db.getUser(username, password, function(results){
 		if(results.length){
 			var data = JSON.stringify(results);
 			var secret = 'TOPSECRETTTTT';
			var now = Math.floor(Date.now() / 1000),
				iat = (now - 10),
				expiresIn = 3600 * 3600 * 3600,
				expr = (now + expiresIn),
				notBefore = (now - 10),
				jwtId = Math.random().toString(36).substring(7);
			var payload = {
				iat: iat,
				jwtid : jwtId,
				audience : 'TEST',
				data : data
			};	
			jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn : expiresIn}, function(err, token) {
					
				if(err){
					res.status(500).json(err);
					res.end();
				}
				 else{
				if(token != false){
					res.header();
					res.json({
  						"token": token,
						"expiryDate": Date.now() + expiresIn
  					});
					res.send();
				}
				else{
					res.send("Could not create token");
					res.end();
				}
				
				 }
			});
 		}else{
 			var output = {
 				error: {
 					message: "not a user",
 				}
 			};
 			res.status(500).json(output);
 			res.end();
 		}
 	})
};