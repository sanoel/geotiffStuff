var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var parseLegendsXlsx = require('./geotiffConverter.js').parseLegendsXlsx;
var fs = require('fs');

var legends = parseLegendsXlsx('colormap.xlsx');
var legendsObj = {};
var all_maps = {};
var map_indexes = [];

fs.readdir('.', function(err, files) {
  for (var i = 0; i < files.length; i++) {
    if (files[i].substr(files[i].length-4) == '.tif') {
      var name = files[i].slice(0, -4);
      var jsonData = geotiff2json(files[i], legends[files[i]]);
      legendsObj[jsonData.name] = jsonData.legend;
      all_maps[jsonData.name] = jsonData;
      fs.writeFile('../app/components/RasterLayer/'+name+'.js', 'export default ' + JSON.stringify(jsonData), (err) => {
        if (err) throw err;
      });
    }
  }
  fs.writeFile('../app/modules/Home/legends.js', 'export default ' + JSON.stringify(legendsObj), (err) => {
    if (err) throw err;
  });
//  fs.writeFile('../app/components/RasterLayer/all_maps.js', 'export default ' + JSON.stringify(all_maps), (err) => {
//    if (err) throw err;
//    console.log('Generated file all_maps.js');
//  });
});



