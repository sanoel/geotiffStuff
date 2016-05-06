import React, { Proptypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import { GeoJson, Circle, Polygon, Marker, Map, TileLayer, ImageOverlay, latLng, latLngBounds} from 'react-leaflet';
import CordovaTileLayer from '../CordovaTileLayer';
import RasterLayer from '../RasterLayer';
import Legend from '../Legend';
import styles from './map.css';
import uuid from 'uuid';

import co from './co.js';
import mo from './mo.js';
import b from './b.js';
import cice from './cice.js';
import clay from './clay.js';
import sand from './sand.js';
import silt from './silt.js';
import ca from './ca.js';
import mg from './mg.js';
import mn from './mn.js';
import na from './na.js';
import fe from './fe.js';
import al from './al.js';
import k from './k.js';
import p from './p.js';
import ph from './ph.js';
import zn from './zn.js';
import classes from './classes.js';

var allMaps = {};
allMaps['C.O.'] = co;
allMaps['M.O.'] = mo;
allMaps['P'] = p;
allMaps['Ca'] = ca;
allMaps['Mg'] = mg;
allMaps['C.I.C.E.'] = cice;
allMaps['B'] = b;
allMaps['Na'] = na;
allMaps['Fe'] = fe;
allMaps['Mn'] = mn;
allMaps['Zn'] = zn;
allMaps['K'] = k;
allMaps['Al'] = al;
allMaps['Arena'] = sand;
allMaps['Limo'] = silt;
allMaps['Aricilla'] = clay;
allMaps['Class'] = classes;
allMaps['pH'] = ph;

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
      color={(!_.isEmpty(this.props.selectedMap)) ? '#000000': '#0000FF'}
      weight={(!_.isEmpty(this.props.selectedMap)) ? 2 : 4}
      fillColor={'0000FF'}
      fillOpacity={(!_.isEmpty(this.props.selectedMap)) ? 0.0: 0.35}
      key={uuid.v4()} 
    />;
    //var rasterLayer = (!_.isEmpty(this.props.selectedMap)) ? (<RasterLayer raster={allMaps[this.props.selectedMap]} />) : (null);
    var legend = (!_.isEmpty(this.props.selectedMap)) ? (<Legend position={'bottomright'} data={allMaps[this.props.selectedMap].legend}/>) : (null);
/*
    var imageryTL = ((checkDevice == mobile) ? 
      <CordovaTileLayer 
        url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      /> : 
      <TileLayer
        url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      />
    );
    console.log(imageryTL);
*/
    console.log(navigator.userAgent);
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

          <CordovaTileLayer 
            url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            folder='./'
            name='optagro-imagery-cache'
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          />
          <RasterLayer 
            raster={!_.isEmpty(this.props.selectedMap) ? allMaps[this.props.selectedMap] : null}
          />
          {lotsGeoJson}
          {circle}
          {legend}
        </Map> 
      </div>
    );
  }
}
export default _Map;
