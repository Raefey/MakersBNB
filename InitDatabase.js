var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'julesnuggy',
  password : 'x0Nt!7S-jKKR',
  database : 'listing'
});

connection.connect(function(err) {
let sql ='SELECT * FROM test_listing';

  connection.query(sql, function(err, res, cols) {
    console.log(res);
  });

});
