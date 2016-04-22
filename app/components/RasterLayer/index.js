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
    this.container.appendChild(this.canvas);
  }

  componentWillUnmount() {
    this.container.removeChild(this.canvas);
  }

  drawTile(canvas, tilePoint, zoom) {
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
        for (var l = 0; l < raster.legend.levels.length-1; l++) {
          if (raster.data[i][j] > raster.legend.levels[l].value & raster.data[i][j] <= raster.legend.levels[l+1]) { 
            data[j*width+i]   = raster.legend.levels.r; // red
            data[j*width+i+1] = raster.legend.levels.g; // green
            data[j*width+i+2] = raster.legend.levels.b; // blue
            data[j*width+i+3] = raster.legend.levels.a; // alpha
          }
        }
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
