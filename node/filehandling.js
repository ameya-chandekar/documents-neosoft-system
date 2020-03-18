var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content! ameya chandeakr', function (err) {
  if (err) throw err;
  console.log('Saved!');
});