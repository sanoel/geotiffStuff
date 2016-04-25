import { Decorator as Cerebral } from 'cerebral-view-react';
import { CanvasTileLayer, Point } from 'react-leaflet';
import React from 'react';
import styles from './style.css';
import InternalTileLayer from './RasterLayerInternalTileLayer';

@Cerebral((props) => {
  return {
  };
})

export default class RasterLayer extends CanvasTileLayer {

  componentWillMount() {
    this.container = document.getElementById('hidden-stuff');
    this.canvas = document.createElement('canvas');
    this.canvas.style.visibility = 'visible';
    this.canvas.style.zIndex = 1000;
    this.container.appendChild(this.canvas);

    super.componentWillMount();
    this.leafletElement.drawTile = this.drawTile.bind(this);
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  drawTile(canvas, tilePoint, zoom) {
    var raster = this.props.raster;
    var ctx = canvas.getContext('2d');
    var tileSwPt = new L.Point(tilePoint.x*256, (tilePoint.y*256)+256);
    var tileNePt = new L.Point((tilePoint.x*256)+256, tilePoint.y*256);

    var tileSw = this.props.map.unproject(tileSwPt, zoom);
    var tileNe = this.props.map.unproject(tileNePt, zoom);
    var tileBounds = L.latLngBounds(tileSw, tileNe);

    var topLeft = raster.geotransform.topleft;
    var dataSw = L.latLng(topLeft.lat + raster.geotransform.cellspacing.lat*raster.data.length, topLeft.lon);
    var dataNe = L.latLng(topLeft.lat, topLeft.lon + raster.geotransform.cellspacing.lon*raster.data[0].length);
    var dataBounds = L.latLngBounds([dataSw, dataNe]);
 
    var dataSwPt = this.props.map.project(dataSw);
    var dataNePt = this.props.map.project(dataNe);
    console.log(dataSw);
    console.log(dataNe);

    // Determine bounds of image data in the hidden image canvas space 
    if (tileBounds.intersects(dataBounds)) {
      console.log('tile contains some data');

      var tileLeft = dataSwPt.x - tileSwPt.x;
//      var tileLeft =  dataSwPt.x%256;
      var tileTop =  dataNePt.y - tileNePt.y;
      //var tileTop =  dataNePt.y%256;
      var tileHeight = (dataSwPt.y - dataNePt.y);
      var tileWidth = (dataNePt.x - dataSwPt.x);
      console.log(tileLeft, tileTop, tileHeight, tileWidth);
      //get image data from hidden image
      //var imgData = this.canvas.getContext('2d').getImageData(0, 0, this.canvas.width, this.canvas.height);

      // Put it on the tile
      ctx.drawImage(this.canvas, tileLeft, tileTop, tileWidth, tileHeight);

      // draw the tile grids
      var padding = 0;
      var totalExtent = 4096 * (1 + padding * 2);
      var height = canvas.height;
      var ratio = height / totalExtent;
      var pad = 4096 * padding * ratio;
      var height = canvas.height;
      ctx.strokeStyle = 'lightgreen';
      ctx.strokeRect(pad, pad, height - 2 * pad, height - 2 * pad);
      ctx.beginPath();
      ctx.stroke();
    }
  }

    
  colorForValue(val) {
    var raster = this.props.raster;
    var levels = raster.legend.levels;
    var numlevels = levels.length;
    for (var i = 0; i < numlevels-1; i++) {
      if (val > levels[i].value && val <= levels[i+1].value) {
        // it's in this one: return floor color.  
        // TODO: interpolate with upper color.
        // TODO: handle values below min and above max color
        return levels[i].color;
      }
    }
    console.log('ERROR: val = ', val, ', but did not find color!');
    return null;
  }

  render() {
    var raster = this.props.raster;
    // create an image in the hidden canvas from the props
    var ctx = this.canvas.getContext('2d');
    var width = raster.data[0].length;
    var height = raster.data.length;
    this.canvas.width = width;
    this.canvas.height = height;
    var img = ctx.createImageData(width, height);
    var data = img.data;
    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
         let color = this.colorForValue(raster.data[j][i]);
         data[((j*width+i)*4)]   = color.r; // red
         data[((j*width+i)*4)+1] = color.g; // green
         data[((j*width+i)*4)+2] = color.b; // blue
         data[((j*width+i)*4)+3] = 255;     // alpha
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
