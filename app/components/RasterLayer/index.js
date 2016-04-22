import { Decorator as Cerebral } from 'cerebral-view-react';
import React from 'react';
import styles from './style.css';
import { CanvasTileLayer } from 'react-leaflet';

@Cerebral((props) => {
  return {
  };
})

class _RasterLayer extends React.Component {

  componentWillMount() {
    this.container = document.getElementById('hidden-stuff');
    this.canvas = document.createElement('CANVAS');
//    this.canvas.style.visibility = 'hidden';
    this.canvas.style.visibility = 'visible';
    this.container.appendChild(this.canvas);
  }

  componentWillUnmount() {
    this.container.removeChild(this.canvas);
  }

  render() {
    // create an image in the hidden canvas from the props
    var ctx = this.canvas.getContext('2d');
    var width = raster.data.length;
    var height = raster.data[0].length;
    var img = ctx.createImageData(width, height);
    var data = img.data;
    for (var i = 0; i < width*height*4; i++) {
      if (i == 0) {
        data[i]     = 255;     // red
        data[i + 1] = 0; // green
        data[i + 2] = 0; // blue
      } else {
        data[i]     = 0;     // red
        data[i + 1] = 255; // green
        data[i + 2] = 0; // blue
      }
    } 
    ctx.putImageData(img, 0, 0);
    return (
      <div>
        <RasterTileInternalLayer canvas={this.canvas} />
      </div>
    );
  }
}

class RasterTileInternalLayer extends CanvasTileLayer {
  componentWillMount() {
    super.componentWillMount();
    this.leafletElement.drawTile = this.drawTile.bind(this);
  }
  drawTile(canvas, tilePoint, zoom) {
    
  }
}

export {_RasterLayer, RasterTileInternalLayer};
