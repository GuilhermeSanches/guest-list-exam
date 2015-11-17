var GuestListService = require('../services/guestListService');


exports.read = function(req, res) {    
	req.getConnection(function(err,connection){
		connection.query('SELECT * FROM guests ',function(err,result){
			if(err) return res.status(400).json();
			return res.status(200).json(result);
		});
	});
}


exports.create = function(req, res) {
 	var name = req.body.name;
    var email = req.body.email;

    
	req.getConnection(function(err,connection){
		connection.query('INSERT INTO guests SET name = ?, email = ?',[name, email],function(err,result){
		    console.log(result);
			if(err) return res.status(400).json(err);
			return res.status(200).json({
                    name: name,
                    email: email,
                    id: result.insertId
                
            }); 
		});
	});
 }
 
 
exports.delete = function(req, res) {
 	var id = req.params.id;
   
    
	req.getConnection(function(err,connection){
		connection.query('DELETE FROM guests WHERE id  = ?',[id],function(err,result){
			if(result. affectedRows == 0) return res.status(404).json({
			    status: false,
			    message: "Guest with "+id+" does not exit"
			});
			return res.status(200).json({
                    status: true,
                    message: 'Guest deleted!'
            }); 
		});
	});
 }


