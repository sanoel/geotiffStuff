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
    this.canvas.remove();
  }

  drawTile(canvas, tilePoint, zoom) {
  }

  colorForValue(val) {
    const raster = this.props.raster;
    const levels = raster.legend.levels;
    const numlevels = levels.length;
    for (let i = 0; i < numlevels-1; i++) {
      let bottom = levels[i].value;
      let top = levels[i+1].value;
      if (val > bottom && val <= top) {
        let percentIntoRange = (val - bottom) / (top - bottom);
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
    for (var i = 0; i < width; i++) {
      for (var j = 0; j < height; j++) {
         let color = this.colorForValue(raster.data[i][j]);
         data[(j*width+i)*4]   = color.r; // red
         data[(j*width+i)*4+1] = color.g; // green
         data[(j*width+i)*4+2] = color.b; // blue
         data[(j*width+i)*4+3] = 255; // blue
//         data[j*width+i+3] = (typeof color.a !== 'undefined') ? color.a : 0; // alpha
      }
    } 
    ctx.putImageData(img, 0, 0);
    return super.render();
  }
}
