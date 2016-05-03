import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { GeoJson, Circle, Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import RasterLayer from '../RasterLayer';
import Legend from '../Legend';
import styles from './map.css';
import uuid from 'uuid';

@Cerebral((props) => {
  return {
    mapList: [ 'home', 'map_list' ],
    selectedMap: [ 'home', 'model', 'selected_map' ],
    userLocation: [ 'home', 'model', 'gps', 'user_location' ],
    hasLocation: [ 'home', 'model', 'gps', 'has_location' ],
    accuracy: [ 'home', 'model', 'gps', 'accuracy' ],
    lots: [ 'home', 'lots' ],
  };
})

  

class _Map extends React.Component {
    
  componentDidMount() {
    this.refs.map.leafletElement.locate();
  }

  handleError(e) {
  }

  handleLocationFound(e) {
  }

  render() {
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
    var lotsGeoJson = <GeoJson 
      data={this.props.lots} 
      color={'#000000'}
      weight={1}  
      fillOpacity={0.0}
      key={uuid.v4()} 
    />;
    var rasterLayer = (!_.isEmpty(this.props.selectedMap)) ? (<RasterLayer raster={this.props.mapList[this.props.selectedMap]} />) : (null);
    var legend = (!_.isEmpty(this.props.selectedMap)) ? (<Legend position={'bottomright'} />) : (null);
    return (
      <div id='map-panel'>
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
     
          <RasterLayer raster={this.props.mapList[this.props.selectedMap]} />

          {lotsGeoJson}
          {circle}
          {legend}
        </Map> 
      </div>
    );
  }
}
export default _Map;
