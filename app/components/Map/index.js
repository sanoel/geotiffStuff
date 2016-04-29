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
    userLocation: ['home', 'model', 'gps', 'user_location' ],
    hasLocation: ['home', 'model', 'gps', 'has_location' ],
    accuracy: ['home', 'model', 'gps', 'accuracy' ],
  };
})

  

class _Map extends React.Component {
    
  componentDidMount() {
    this.refs.map.leafletElement.locate();
  }

  handleError(e) {
    console.log(e);
  }

  handleLocationFound(e) {
    console.log(e);
  }

  render() {
    var raster = this.props.mapList[this.props.selectedMap];
    var topLeft = [raster.geotransform.topleft.lat, raster.geotransform.topleft.lon];
    var bottom = raster.geotransform.topleft.lat + raster.geotransform.cellspacing.lat * raster.data.length;
    var right = raster.geotransform.topleft.lon + raster.geotransform.cellspacing.lon * raster.data[0].length;
    var position = [4.6,-72.8];

    const marker = this.props.hasLocation
      ? <Marker
          position={this.props.userLocation}
        />
      : null;

    const circle = this.props.hasLocation
      ? <Circle
          center={this.props.userLocation}
          radius={this.props.accuracy / 2}
        />
      : null;
    
    const signals = this.props.signals.home;
    console.log('map rendering!');
    return (
      <div id='map-panel'>
        <Legend 
          width={150}
          height={60}
        />
        <Map
          ref='map' 
          setView={true}
          dragging={true} 
          center={position} 
          zoom={11}
          onLocationfound={(e) => {signals.locationFound({latlng:e.latlng, accuracy:e.accuracy})}}
          locationError={console.log("Location Error!")}>
          <TileLayer
            url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          <RasterLayer 
            raster={this.props.mapList[this.props.selectedMap]} 
          />
          {circle}
        </Map> 
      </div>
    );
  }
}
export default _Map;
