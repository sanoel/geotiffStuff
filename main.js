var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var fs = require('fs');

fs.readdir('.', function(err, files) {
  for (var i = 0; i < file.length; i++) {
    console.log(file[i]);
  }
});
var json = geotiff2json('ph_4326.tif');
