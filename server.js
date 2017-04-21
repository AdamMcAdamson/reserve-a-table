var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

// TEMP
// -------------------------

var mastertable = [{
	customerName: 'John Smith',
	phoneNumber: '555-555-5555',
	customerEmail: 'example@example.com',
	customerID: '1111'
}, {
	customerName: 'Snow John',
	phoneNumber: '544-555-5555',
	customerEmail: 'example@example.com',
	customerID: '2222'
}, {
	customerName: 'Willson',
	phoneNumber: '533-555-5555',
	customerEmail: 'example@example.com',
	customerID: '4444'
}, {
	customerName: 'John Smith',
	phoneNumber: '555-555-5555',
	customerEmail: 'example@example.com',
	customerID: '5555'
}, {
	customerName: 'Snow John',
	phoneNumber: '544-555-5555',
	customerEmail: 'example@example.com',
	customerID: '6666'
}, {
	customerName: 'Willson',
	phoneNumber: '533-555-5555',
	customerEmail: 'example@example.com',
	customerID: '7777'
}];

var topFive = [{
	customerName: 'John Smith',
	phoneNumber: '555-555-5555',
	customerEmail: 'example@example.com',
	customerID: '1111'
}, {
	customerName: 'Snow John',
	phoneNumber: '544-555-5555',
	customerEmail: 'example@example.com',
	customerID: '2222'
}, {
	customerName: 'Willson',
	phoneNumber: '533-555-5555',
	customerEmail: 'example@example.com',
	customerID: '3333'
}, {
	customerName: 'Willson',
	phoneNumber: '533-555-5555',
	customerEmail: 'example@example.com',
	customerID: '4444'
}, {
	customerName: 'John Smith',
	phoneNumber: '555-555-5555',
	customerEmail: 'example@example.com',
	customerID: '5555'
}];

var waitlist = [{
	customerName: 'Snow John',
	phoneNumber: '544-555-5555',
	customerEmail: 'example@example.com',
	customerID: '6666'
}, {
	customerName: 'Willson',
	phoneNumber: '533-555-5555',
	customerEmail: 'example@example.com',
	customerID: '7777'
}];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "html/index.html"));
});
app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "html/reserve.html"));
});
app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "html/tables.html"));
});
app.get("/api/tables", function(req, res) {
  res.json(mastertable);
});
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

app.get("/reserve/api/tables/:reservation?", function(req, res) {
	// var chosen = re.params.reservation;
	// if (chosen) {
	// 	console.log(chosen);

	// 	// for(var i = )
	// }
});
app.get("/tables/api/topFive/", function(req, res) {
	connection.query("SELECT * FROM topFive", function(err, data) {
		if (err) throw err;
		res.json(data);
	});
});
app.get("/tables/api/waitlist/", function(req, res) {
	connection.query("SELECT * FROM waitlist", function(err, data) {
		if (err) throw err;
		res.json(data);
	});
});

app.post("/tables/api/clear/", function(req, res) {
	connection.query("DELETE FROM topFive", function(err,data){
		if (err) throw err;
	})
	connection.query("DELETE FROM waitlist", function(err,data){
		if (err) throw err;
	})
	connection.query("DELETE FROM mastertable", function(err,data){
		if (err) throw err;
	})
});
app.post('/reserve', function(req, res) {
	postreserve()
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});

function postreserve() {
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
				} else {
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
}