var geotiff2json = require('./geotiffConverter.js').geotiff2json;
var polygonize = require('./geotiffConverter.js').polygonize;
var buildImage = require('./geotiffConverter.js').buildImage;
var makeGeoJsonPolygons = require('./geotiffConverter.js').makeGeoJsonPolygons;
var json = geotiff2json('ph_4326.tif');
//makeGeoJsonPolygons(json, 'ph_4326.tif');
buildImage(json);
//polygonize('ph_4326.tif', 10);
        

/*
var argv = require('minimist')(process.argv.slice(2));
var self = this;
_.each(argv._, function(file) {
console.log('got here');
  if (file.slice(-3) != 'tif') {
    //throw error
  } else {
    this.convert(file);
  }
});
*/
