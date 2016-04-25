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
    let ctx = canvas.getContext('2d');
    var southWest = this.props.map.unproject(new L.Point(tilePoint.x*256, (tilePoint.y*256)+256), zoom);
    var northEast = this.props.map.unproject(new L.Point((tilePoint.x*256)+256, tilePoint.y*256), zoom);
    var raster = this.props.raster;
    var tifImgData = this.getImgData(southWest, northEast);
    console.log(tifImgData);
    if (tifImgData) {
      var topleftpt  = this.props.map.project(L.latLng(raster.geotransform.topleft.lat, raster.geotransform.topleft.lon), zoom);
      console.log(topleftpt);
      ctx.putImageData(tifImgData, topleftpt.x%256, topleftpt.y%256);
    }

    //draw grid lines
    var padding = 0;
    var totalExtent = 4096 * (1 + padding * 2);
    var height = canvas.height;
    var ratio = height / totalExtent;
    var pad = 4096 * padding * ratio;
    var height = canvas.height;
    var halfHeight = height / 2;
    ctx.strokeStyle = 'lightgreen';
    ctx.strokeRect(pad, pad, height - 2 * pad, height - 2 * pad);
    ctx.beginPath();
    ctx.moveTo(pad, halfHeight);
    ctx.lineTo(height - pad, halfHeight);
    ctx.moveTo(halfHeight, pad);
    ctx.lineTo(halfHeight, height - pad);
    ctx.stroke();
  }

  getImgData(southWest, northEast) {
    var raster = this.props.raster;
    var tileBounds = L.latLngBounds(southWest, northEast);
    var topLeft = raster.geotransform.topleft;
    var gtifSouthWest = L.latLng(topLeft.lat + raster.geotransform.cellspacing.lat*raster.data.length, topLeft.lon);
    var gtifNorthEast = L.latLng(topLeft.lat, topLeft.lon + raster.geotransform.cellspacing.lon*raster.data[0].length);
    var gtifBounds = L.latLngBounds([gtifSouthWest, gtifNorthEast]);
    if (tileBounds.intersects(gtifBounds)) {
      console.log('great success');
      return this.canvas.getContext('2d').getImageData(0, 0, this.canvas.width, this.canvas.height);
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
    var width = raster.data.length;
    var height = raster.data[0].length;
    this.canvas.width = width;
    this.canvas.height = height;
    var img = ctx.createImageData(width, height);
    var data = img.data;
    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
         let color = this.colorForValue(raster.data[i][j]);
         data[(i*width+j)*4]   = color.r; // red
         data[(i*width+j)*4+1] = color.g; // green
         data[(i*width+j)*4+2] = color.b; // blue
         data[(i*width+j)*4+3] = 255; // blue
//         data[j*width+i+3] = (typeof color.a !== 'undefined') ? color.a : 0; // alpha
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
