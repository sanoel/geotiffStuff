//var SearchBar = require('react-search-bar');
import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import _ from 'lodash';
import uuid from 'uuid';
import styles from './maplist.css';

@Cerebral((props) => {
  return {
    soil_prop_maps: ['home', 'map_list' ],
  };
})

class MapList extends React.Component {

  static propTypes = {
  };

  render() {
    const signals = this.props.signals.home;
    var self = this;

    var map_list = [];
    _.each(self.props.soil_prop_maps, function(map, key) {
      map_list.push(<div 
        key={uuid.v4()} 
        className={styles['maplist-item']}
        onClick={() => signals.mapListItemClicked({mapItem:key})}>
        {key}
      </div>);
    });
    return (
      <div className={styles['maplist']}>
        {map_list}
      </div>
    );
  }
}

export default MapList;
