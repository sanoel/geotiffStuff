//var SearchBar = require('react-search-bar');
import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import _ from 'lodash';
import uuid from 'uuid';
import styles from './maplist.css';

@Cerebral((props) => {
  return {
    mapList: [ 'home', 'map_list' ],
    selectedMap: [ 'home', 'model', 'selected_map' ],
  };
})

class MapList extends React.Component {

  static propTypes = {
  };

  render() {
    const signals = this.props.signals.home;
    var self = this;
    var mapList = this.props.mapList;
    var maps = [];
    _.each(self.props.mapList, function(map, key) {
      if (map == self.props.selectedMap) {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['selected-maplist-item']}>
          {map}
        </div>);
      } else {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['maplist-item']}
          onClick={() => signals.mapListItemClicked({mapItem:map})}>
          {map}
        </div>);
      }
      maps.push(<hr key={uuid.v4()}/>);
    });
/*
    for (var i = 0; i < mapList.length; i++) { 
      var map = mapList[i];
      console.log(mapList[i]);
      if (map == this.props.selectedMap) {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['selected-maplist-item']}>
          {map}
        </div>);
      } else {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['maplist-item']}
          onClick={() => {signals.mapListItemClicked({mapItem:map})}}>
          {map}
        </div>);
      }
      maps.push(<hr key={uuid.v4()}/>);
    };
*/
    return (
      <div className={styles['maplist']}>
        {maps}
        <button type="button" onClick={() => {signals.clearMapButtonClicked()}}>
          Clear Map
        </button>
      </div>
    );
  }
}

export default MapList;
