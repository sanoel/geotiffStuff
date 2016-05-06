import { PropTypes } from 'react';
import { tileLayerCordova } from './leaflet-tilelayer-cordova.js';
import { tileLayer } from 'leaflet';
import { BaseTileLayer } from 'react-leaflet';

export default class CordovaTileLayer extends BaseTileLayer {
  static propTypes = {
    url: PropTypes.string.isRequired,
  };

  componentWillMount() {
    super.componentWillMount();
    const { map, url, ...props } = this.props;
    this.leafletElement = L.tileLayerCordova(url, props);
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (url && url !== prevProps.url) {
      this.leafletElement.setUrl(url);
    }
  }
}
