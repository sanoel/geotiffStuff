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

    // Determine where to put the hidden image on the tile canvas 
    if (tileBounds.intersects(dataBounds)) {
      var tileLeft = dataSwPt.x - tileSwPt.x;
      var tileTop =  dataNePt.y - tileNePt.y;
      var tileHeight = (dataSwPt.y - dataNePt.y);
      var tileWidth = (dataNePt.x - dataSwPt.x);
      // Put it on the tile
      ctx.drawImage(this.canvas, tileLeft, tileTop, tileWidth, tileHeight);
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
