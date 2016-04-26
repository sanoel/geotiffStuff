import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import RasterLayer from '../RasterLayer';
import styles from './map.css';

@Cerebral((props) => {
  return {
    map_list: ['home', 'map_list'],
    selected_map_item: ['home', 'model', 'selected_map_item'],
  };
})

class _Map extends React.Component {
  render() {
    var raster = this.props.map_list[this.props.selected_map_item];
    var topLeft = [raster.geotransform.topleft.lat, raster.geotransform.topleft.lon];
    var bottom = raster.geotransform.topleft.lat + raster.geotransform.cellspacing.lat * raster.data.length;
    var right = raster.geotransform.topleft.lon + raster.geotransform.cellspacing.lon * raster.data[0].length;
    var position = [4.6,-72.8];
    return (
      <div id='map-panel'>
        <Map dragging={true} center={position} zoom={11} tms={true}>
          <TileLayer
            url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            attribution= 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          <RasterLayer raster={this.props.map_list[this.props.selected_map_item]} />
        </Map> 
      </div>
    );
  }
}
export default _Map;
