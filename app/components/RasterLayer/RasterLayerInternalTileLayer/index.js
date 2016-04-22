import { CanvasTileLayer } from 'react-leaflet';

export default class RasterTileInternalLayer extends CanvasTileLayer {
  componentWillMount() {
    super.componentWillMount();
    this.leafletElement.drawTile = this.drawTile.bind(this);
  }
  drawTile(canvas, tilePoint, zoom) {
    
  }
}

