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

  componentWillMount() {
    //show loading gif
//    var container = document.getElementById('loading');
//    container.style.visibility = 'visible';
  }

  
  componentDidMount() {
    //hide loading gif
//    var container = document.getElementById('loading');
//    container.style.visibility = 'hidden';
  }

  render() {

    return (
      <div className="app">
        <Map />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
