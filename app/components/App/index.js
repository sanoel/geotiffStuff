import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import _ from 'lodash';
import uuid from 'uuid';
import NoteList from '../NoteList/';
import Map from '../Map';
import MenuBar from '../MenuBar';

@Cerebral({
})

class App extends React.Component {

  static propTypes = {
  };

  render() {

  //      <NoteList />
    return (
      <div className="app">
        <MenuBar />
        <Map />
      </div>
    );
  }
}

export default App;
