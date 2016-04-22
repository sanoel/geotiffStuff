import { Decorator as Cerebral } from 'cerebral-view-react';
import styles from './style.css';


@Cerebral((props) => {
  return {
  };
})

class _RasterLayer extends React.Component {
  

  componentWillMount() {
    this.container = document.getElementById('hidden-stuff');
    this.canvas = document.createElement('CANVAS');
    this.canvas.style.visibility = 'hidden';
    this.container.appendChild(this.canvas);
  }

  componentWillUnmount() {
    this.container.removeChild(this.canvas);
  }

  render() {
    // create an image in the hidden canvas from the props
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

export default _RasterLayer;
