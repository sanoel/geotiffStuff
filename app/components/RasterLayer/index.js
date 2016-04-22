import { Decorator as Cerebral } from 'cerebral-view-react';
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
    this.canvas = document.createElement('CANVAS');
    this.canvas.style.visibility = 'visible';
    this.container.appendChild(this.canvas);
  }

  componentWillUnmount() {
    this.container.removeChild(this.canvas);
  }

  drawTile {
  }

  render() {
    var raster = this.props.raster;
    // create an image in the hidden canvas from the props
    var ctx = this.canvas.getContext('2d');
    var width = raster.data.length;
    var height = raster.data[0].length;
    var img = ctx.createImageData(width, height);
    var data = img.data;
    for (var i = 0; i < width*height*4; i++) {
      if (i == 0) {
        data[i]     = raster.data[i][j]; // red
        data[i + 1] = ;   // green
        data[i + 2] = 0;   // blue
        data[i + 3] = 255; //
      } else {
        data[i]     = 0;   // red
        data[i + 1] = 255; // green
        data[i + 2] = 0;   // blue
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
