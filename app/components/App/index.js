import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import _ from 'lodash';
import uuid from 'uuid';
import ControlPanel from '../ControlPanel';
import Map from '../Map';
import MenuBar from '../MenuBar';

@Cerebral((props) => {
  return {
  };
})

class App extends React.Component {

  static propTypes = {
  };

  render() {

    return (
      <div className="app">
        <MenuBar />
        <ControlPanel />
        <Map />
      </div>
    );
  }
}

export default App;
