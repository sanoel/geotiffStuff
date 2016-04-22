import { Decorator as Cerebral } from 'cerebral-view-react';
import { CanvasTileLayer } from 'react-leaflet';
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
    this.canvas.style.zIndex = '1000';
    this.container.appendChild(this.canvas);

    super.componentWillMount();
    this.leafletElement.drawTile = this.drawTile.bind(this);
  }

  componentWillUnmount() {
    //this.container.removeChild(this.canvas);
  }

  drawTile(canvas, tilePoint, zoom) {
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
    return null;
  }

  render() {
    var raster = this.props.raster;
    // create an image in the hidden canvas from the props
    var ctx = this.canvas.getContext('2d');
    var width = raster.data.length;
    var height = raster.data[0].length;
    var img = ctx.createImageData(width, height);
    var data = img.data;
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
         const color = this.colorForValue(raster.data[i][j]);
         data[j*width+i]   = color.r; // red
         data[j*width+i+1] = color.g; // green
         data[j*width+i+2] = color.b; // blue
         data[j*width+i+3] = 255; // blue
//         data[j*width+i+3] = (typeof color.a !== 'undefined') ? color.a : 0; // alpha
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
