router.post('/reserve', function(req, res) {
	var reserve_name = req.body.reserve_name;
	var reserve_phone = req.body.reserve_phone;
	var reserve_email = req.body.reserve_email;
	var reserve_uniqueID = req.body.reserve_uniqueID;
	connection.query('SELECT * FROM mastertable WHERE customerID =  ?', [reserve_uniqueID], function(err, result) {
		if (err) {
			console.log("sorry there was an error");
		}
		if (result.length !== 0) {
			connection.query('INSERT INTO mastertable(customerName,phoneNumber,customerEmail,customerID) VALUES(?,?,?,?)', [reserve_name, reserve_phone, reserve_email, reserve_uniqueID], function(err, result) {
				if (err) throw err;
			});
			connection.query('SELECT * FROM topFive', function(err, result) {
				if (result.length < 5) {
					connection.query('INSERT INTO topFive(customerName,phoneNumber,customerEmail,customerID) VALUES(?,?,?,?)', [reserve_name, reserve_phone, reserve_email, reserve_uniqueID], function(err, result) {
						if (err) throw err;
					});
				}
				else{
					waitlistDB();
				}
			})
			alert("Thanks");
			res.redirect('/');
		} else {
			console.log("Theres a customer with this ID");
			alert("Sorry theres already with a customer with this ID");
		}
	})

	function waitlistDB() {
		connection.query('INSERT INTO waitlist(customerName,phoneNumber,customerEmail,customerID) VALUES(?,?,?,?)', [reserve_name, reserve_phone, reserve_email, reserve_uniqueID], function(err, result) {
			if (err) throw err;
		})
	}
});