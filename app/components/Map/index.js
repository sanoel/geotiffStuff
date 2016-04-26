import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import RasterLayer from '../RasterLayer';
import styles from './map.css';

@Cerebral((props) => {
  return {
    raster: [ 'home', 'raster' ],
    ph: [ 'home', 'ph' ],
  };
})

class _Map extends React.Component {
  render() {
    var raster = this.props.raster;
    var topLeft = [raster.geotransform.topleft.lat, raster.geotransform.topleft.lon];
    var bottom = raster.geotransform.topleft.lat + raster.geotransform.cellspacing.lat * raster.data.length;
    var right = raster.geotransform.topleft.lon + raster.geotransform.cellspacing.lon * raster.data[0].length;
    var position = [4.6,-72.8];
    return (
      <div id='map-panel'>
        <Map dragging={true} center={position} zoom={11} tms={true}>
          <TileLayer
            url="http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png"
            attribution='Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
          />
          <Marker position={topLeft} />
          <Marker position={[bottom, right]} />
          <RasterLayer raster={this.props.ph.ph} />
        </Map> 
      </div>
    );
  }
}
export default _Map;
