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

    var maps = [];
    _.each(self.props.mapList, function(map, key) {
      if (key == self.props.selectedMap) {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['selected-maplist-item']}
          onClick={() => signals.mapListItemClicked({mapItem:key})}>
          {key}
        </div>);
      } else {
        maps.push(<div 
          key={uuid.v4()} 
          className={styles['maplist-item']}
          onClick={() => signals.mapListItemClicked({mapItem:key})}>
          {key}
        </div>);
      }
    });
    return (
      <div className={styles['maplist']}>
        {maps}
      </div>
    );
  }
}

export default MapList;
