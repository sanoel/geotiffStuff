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

  componentDidMount() {
    console.log(this.leafletElement);
    var tile_list = this.leafletElement.calculateXYZListFromPyramid(4.6, -72.8, 0, 17);
    this.leafletElement.downloadXYZList(
      // 1st param: a list of XYZ objects indicating tiles to download
      tile_list,
      // 2nd param: overwrite existing tiles on disk?
      // if no then a tile already on disk will be kept, which can be a big time saver
      false,
      // 3rd param: progress callback
      // receives the number of tiles downloaded and the number of tiles total
      // caller can calculate a percentage, update progress bar, etc.
      function (done,total) {
        var percent = Math.round(100 * done / total);
        status_block.innerHTML = done  + " / " + total + " = " + percent + "%";
      },
      // 4th param: complete callback
      // no parameters are given, but we know we're done!
      function () {
          // for this demo, on success we use another L.TileLayer.Cordova feature and show the disk usage!
        this.leafletElement.getDiskUsage(function (filecount,bytes) {
          var kilobytes = Math.round( bytes / 1024 );
          status_block.innerHTML = "Done" + "<br/>" + filecount + " files" + "<br/>" + kilobytes + " kB";
        });
      },
      // 5th param: error callback
      // parameter is the error message string
      function (error) {
        alert("Failed\nError code: " + error.code);
      }
    )

  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    if (url && url !== prevProps.url) {
      this.leafletElement.setUrl(url);
    }
  }
}
