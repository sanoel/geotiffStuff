import { Decorator as Cerebral } from 'cerebral-view-react';
import { CanvasTileLayer, Point } from 'react-leaflet';
import React from 'react';
import styles from './style.css';
import InternalTileLayer from './RasterLayerInternalTileLayer';

function blendColors(c1, c2, percent) {
  let a1 = (typeof c1.a === 'undefined') ? 255 : c1.a; // Defualt opaque
  let a2 = (typeof c1.b === 'undefined') ? 255 : c1.b;
  return { 
    r: c1.r * percent + c2.r * (1-percent),
    g: c1.g * percent + c2.g * (1-percent),
    b: c1.b * percent + c2.b * (1-percent),
    a:   a1 * percent +   a2 * (1-percent),
  };
}

@Cerebral((props) => {
  return {
  };
})

export default class RasterLayer extends CanvasTileLayer {

  componentWillMount() {
    this.container = document.getElementById('hidden-stuff');
    this.canvas = document.createElement('canvas');
    this.canvas.style.visibility = 'hidden';
    this.canvas.style.zIndex = 1000;
    this.container.appendChild(this.canvas);

    super.componentWillMount();
    this.leafletElement.drawTile = this.drawTile.bind(this);
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  drawTile(canvas, tilePoint, zoom) {
    console.log(raster);
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
    console.log(val);
    if (val == this.props.raster.nodataval) {
      return {r: 0, g: 0, b: 0, a: 0 };
    }
    const raster = this.props.raster;
    const levels = raster.legend.levels;
    const numlevels = levels.length;
    console.log(levels[0].value);
    console.log(val <= levels[0].value);
    if (val <= levels[0].value) {
      return levels[0].color;
    }
    console.log(levels[numlevels-1].value);
    console.log(val >= levels[numlevels-1].value);
    if (val >= levels[numlevels-1].value) {
      return levels[numlevels-1].color;
    }
    for (let i = 0; i < numlevels-1; i++) {
      let bottom = levels[i];
      let top = levels[i+1];
      if (val > bottom.value && val <= top.value) {
        let percentIntoRange = (val - bottom.value) / (top.value - bottom.value);
        return blendColors(top.color, bottom.color, percentIntoRange);
      }
    }
    console.log('ERROR: val = ', val, ', but did not find color!');
    return null;
  }

  render() {
    console.log(this.props.raster);
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
