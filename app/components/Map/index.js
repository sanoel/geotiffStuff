import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { Circle, Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import RasterLayer from '../RasterLayer';
import Legend from '../Legend';
import styles from './map.css';

@Cerebral((props) => {
  return {
    mapList: ['home', 'map_list'],
    selectedMap: ['home', 'model', 'selected_map'],
    user_location: ['home', 'user_location' ],
    user_gps_radius: ['home', 'user_gps_radius' ],
  };
})

  

class _Map extends React.Component {

  render() {
    var raster = this.props.mapList[this.props.selectedMap];
    var topLeft = [raster.geotransform.topleft.lat, raster.geotransform.topleft.lon];
    var bottom = raster.geotransform.topleft.lat + raster.geotransform.cellspacing.lat * raster.data.length;
    var right = raster.geotransform.topleft.lon + raster.geotransform.cellspacing.lon * raster.data[0].length;
    var position = [4.6,-72.8];

    var circle;
    var marker;

    if (this.props.user_location) {
      marker = 
        <Marker
          position={this.props.user_location}
        />;
      if(this.props.user_gps_radius) {
        circle = 
        <Circle
          center={this.props.user_location}
          radius={this.props.user_gps_radius}
        />;
      }
    }
    
    return (
      <div id='map-panel'>
        <Legend 
          width={150}
          height={60}
        />
        <Map 
          dragging={true} 
          center={position} 
          zoom={11}
          onLocationFound={(e) => signals.locationFound({evt: e})}
          onLocationError={console.log('location error')}>
          <TileLayer
            url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          <RasterLayer 
            raster={this.props.mapList[this.props.selectedMap]} 
          />
        </Map> 
      </div>
    );
  }
}
export default _Map;
