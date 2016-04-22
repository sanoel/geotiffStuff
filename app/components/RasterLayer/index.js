import { Decorator as Cerebral } from 'cerebral-view-react';
import styles from './style.css';

@Cerebral((props) => {
  return {
    raster: [ 'raster' ],
  };
})

class _RasterLayer extends React.Component {

  componentWillMount() {
  }

  render() {
    return (
      <div id='map-panel'>
        <Map onLeafletMousedown={(e) => {signals.mouseDownOnMap({vertex_value: e.latlng, select_note: this.props.selectedNote, newSelectedNote:this.props.id})}} dragging={true} center={position} zoom={19} tms={true}>
          <TileLayer
            url="http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png"
            attribution='Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
          />
          <RasterLayer raster={this.props.raster}/>
        </Map> 
      </div>
    );
  }

}
export default _RasterLayer;
