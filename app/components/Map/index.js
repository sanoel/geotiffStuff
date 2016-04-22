import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import RasterLayer from '../RasterLayer';
import styles from './map.css';
console.log(RasterLayer);

@Cerebral((props) => {
  return {
    raster: [ 'raster' ],
    legend: [ 'legend' ],
  };
})

class _Map extends React.Component {

  render() {
    var position = [4.5,-72.4];
    return (
      <div id='map-panel'>
        <Map dragging={true} center={position} zoom={11} tms={true}>
          <TileLayer
            url="http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png"
            attribution='Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
          />
          <RasterLayer raster={this.props.raster} legend={this.props.legend}/>
        </Map> 
      </div>
    );
  }
}
export default _Map;
