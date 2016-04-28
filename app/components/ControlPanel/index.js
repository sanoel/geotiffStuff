//var SearchBar = require('react-search-bar');
import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import PanelTabs from '../PanelTabs';
import _ from 'lodash';
import uuid from 'uuid';
import MapList from '../MapList';
import styles from './control-panel.css';

@Cerebral((props) => {
  return {
  };
})

class ControlPanel extends React.Component {

  static propTypes = {
  };

  render() {
    const signals = this.props.signals.home;
    var self = this;

    return (
      <div className={styles['control-panel']}>
        <PanelTabs />
        <MapList />
      </div>
    );
  }
}

export default ControlPanel;
