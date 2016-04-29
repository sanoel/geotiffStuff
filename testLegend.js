import React, { Proptypes } from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import { MapControl } from 'react-leaflet';
import styles from './legend.css';
import Color from 'color';

@Cerebral((props) => {
  return {
    mapList: ['home', 'map_list' ],
    selectedMap: [ 'home', 'model', 'selected_map' ]
  };
})

  

class Legend extends MapControl {
  
  blendColors(c1, c2, percent) {
    let a1 = (typeof c1.a === 'undefined') ? 255 : c1.a; // Defualt opaque
    let a2 = (typeof c1.b === 'undefined') ? 255 : c1.b;
    return { 
      r: c1.r * percent + c2.r * (1-percent),
      g: c1.g * percent + c2.g * (1-percent),
      b: c1.b * percent + c2.b * (1-percent),
      a:   a1 * percent +   a2 * (1-percent),
    };
  }

  render() {
    var levels = this.props.mapList[this.props.selectedMap].legend.levels;
    var numlevels = levels.length;
    var legendPieces = [];

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10, 20, 50, 100, 200, 500, 1000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < numlevels-1; i++) {
      var startVal = levels[i].value;
      var endVal = levels[i+1].value;
      //find the percent of overall range that it occupies
      var rangePercent = (endVal - startVal)/(levels[numlevels - 1].value - levels[0].value);
      //get colors at each end
      var startColor = levels[i].color;
      var endColor = levels[i+1].color;
      var st = '"background:'+Color(levels[i].color).rgbString();
      console.log(st);
      legendPieces.push(
//        <i style='"background:'+Color(levels[i].color).rgbString()+'"' ></i>
  //      levels[i].value + (levels[i + 1].value ? '&ndash;' + levels[i + 1].value + <br>
      );

 //     div.innerHTML +=
  //      '<i style="background:' + Color(levels[i].color).rgbString() + '"></i> ' +
  //      levels[i].value + (levels[i + 1].value ? '&ndash;' + levels[i + 1].value + '<br>' : '+');
    }
    console.log(legendPieces);

   // console.log(div);
    return (
      <div className={styles['map-legend']}>
      </div>
    );
  }
}
export default Legend;
