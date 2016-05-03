var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var parseLegendsXlsx = require('./geotiffConverter.js').parseLegendsXlsx;
var fs = require('fs');

legends = parseLegendsXlsx('colormap.xlsx');

var all_maps = [];
var map_indexes = [];

fs.readdir('./clipped/', function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (files[i].substr(files[i].length-4) == '.tif') {
      if (files[i] == 'clp_na.tif') continue;
      var name = files[i].slice(14, -4);
      console.log(name);
      all_maps[name] = geotiff2json('./clipped/'+files[i], legends[files[i]]);
    }
  }
});

