var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var parseLegendsXlsx = require('./geotiffConverter.js').parseLegendsXlsx;
var fs = require('fs');

legends = parseLegendsXlsx('colormap.xlsx');

fs.readdir('./clipped/', function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (files[i].substr(files[i].length-4) == '.tif') {
      if (files[i] == 'clp_na.tif') continue;
      geotiff2json('./clipped/'+files[i], legends[files[i]]);
    }
  }
});
