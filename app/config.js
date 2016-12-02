
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('IT WORKS!!!!!!!!! db connected');
});



module.exports = db;

