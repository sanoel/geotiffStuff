import React, { Proptypes } from 'react';
import { Decorator as Cerebral } from 'cerebral-view-react';
import styles from './legend.css';

@Cerebral((props) => {
  return {
    mapList: ['home', 'map_list' ],
    selectedMap: [ 'home', 'model', 'selected_map' ]
  };
})

  

class Legend extends React.Component {
  
  componentWillMount(){

  } 

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
    this.container = document.getElementById('legend');
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.bottom = '5px';
    this.canvas.style.right = '5px';
    this.canvas.style.zIndex = 6;
    this.canvas.style.width = parseInt(this.props.width)+'px';
    this.canvas.style.height = parseInt(this.props.height)+'px';
    this.container.appendChild(this.canvas);
    var ctx = this.canvas.getContext('2d');
    ctx.beginPath();

    for (var i = 0; i < numlevels-1; i++) {
      console.log(i);
      var startVal = levels[i].value;
      var endVal = levels[i+1].value;
      //find the percent of overall range that it occupies
      var rangePercent = (endVal - startVal)/(levels[numlevels - 1].value - levels[0].value);
      var segmentWidth = Math.floor(rangePercent*255);
      //get colors at each end
      var startColor = levels[i].color;
      var endColor = levels[i+1].color;

      //blend between the colors of this segment
      for (var j = 0; j <= segmentWidth; j++) {
        var blendColor = this.blendColors(startColor, endColor, (j/segmentWidth));
        ctx.fillStyle = 'rgb('+blendColor.r.toString()+','+blendColor.g.toString()+','+blendColor.b.toString()+')';
        ctx.fillRect(j, 0, 1, this.props.height);
      }
    }

    for (var i = 0; i < numlevels-1; i++) {
    
    }
    
    return (
      <div className={styles['map-legend']}>
        <div className={styles['legend-min']}>{levels[0].value.toFixed(2).toString()}</div>
        <div className={styles['legend-max']}>{levels[numlevels -1].value.toFixed(2).toString()}</div>
      </div>
    );
  }
}
export default Legend;
