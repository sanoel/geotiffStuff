var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var fs = require('fs');

fs.readdir('.', function(err, files) {
  for (var i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
var json = geotiff2json('ph_4326.tif');
