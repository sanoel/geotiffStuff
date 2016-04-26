import uuid from 'uuid';
import ph from './ph_4326.js';

var tree = {

  ph: {ph},

  raster: {
    nodataval: -9999, 
    legend: {
      levels: [
        { value: 0, color: { r: 255, g: 0, b: 0 } },
        { value: 5, color: { r: 0, g: 255, b: 0 } },
        { value: 10, color: { r: 0, g: 0, b: 255 } },
      ],
    },
    geotransform: {
      topleft: { lat: 4.624, lon: -72.922 },
      cellspacing: { lat: -0.00191, lon: 0.00696 },
    },
    data: [
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 8.1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
      [ 8.1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
      [ 8.1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
      [ 1.1, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 8, 9, 3, 5, 7, 2, 5, 6, 3, 4, 2, 3, 2 ],
    ],
  },


  model: {
    selected_note: {},
    notes: initial_notes(), //initial_notes(),
    tags: initial_tags(),
    edit_tags: {
      input_text:'',
      visible: false,
      note_id: {},
      completions: [],
      temp_tags: [],
    },
    fields: {
      Smith40: {
        name: 'Smith40',
        area_acres: '40',
      },
    }, 
  },
  view: {
    sort_mode: 'all', //'all' 'fields' 'tags'
    map: {$isLoading: true}, 
  }
}; 

function initial_tags() {
  var text1 = 'herbicide';
  var text2 = 'low area';
  var tags_list = {};
  tags_list[text1] = {text: text1, references: 1};
  tags_list[text2] = {text: text2, references: 1};
  return tags_list;
}

function initial_notes() { 
  var notes_list = {};
  for (var i = 1; i<4;i++) {
    var col = '#'+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16);
    var note = {
        text: 'ran low on herbicide and applied lower rate here',
        tags: ['herbicide'],
        fields: ['Smith40'],
        geojson: { "type": "Polygon",
          "coordinates": [
            [ ]
          ]
        },
        geometry_visible: true,
        color: col,
        completions: [],
        selected: false,
    };
    if (i === 2) {
      var col = '#'+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16);
      var text = 'low area';
      note = {
        text: 'drown out; replanted 6/18/2015',
        tags: ['low area'],
        fields: ['Smith40'],
        geojson: { "type": "Polygon",
          "coordinates": [
            [ ]
          ]
        }, 
        geometry_visible: true,
        color: col,
        completions: [],
        selected: false,
      };
    }
    if (i === 3) {
      var col = '#'+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16)+(Math.round(Math.random()* 127) + 127).toString(16);
      note = {
        text: 'applied snake oil',
        tags: [],
        fields: ['Smith40'],
        geojson:
{"type":"FeatureCollection","properties":{"kind":"state","state":"IN"},"features":[
{"type":"Feature","properties":{"kind":"county","name":"Tippecanoe","state":"IN"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-87.0964,40.5603],[-86.7733,40.5603],[-86.6966,40.5603],[-86.6966,40.4343],[-86.6966,40.2152],[-86.9211,40.2152],[-87.0909,40.2152],[-87.0909,40.3686],[-87.0964,40.4781]]]]}}
]},
        geometry_visible: true,
        color: col,
        completions: [],
        selected: false,
      };
    }
    note.order = i;
    note.id = uuid.v4();
    notes_list[note.id] = note;
  };
  return notes_list;
}

function getColor() {
  var r = (Math.round(Math.random()* 127) + 127).toString(16);
  var g = (Math.round(Math.random()* 127) + 127).toString(16);
  var b = (Math.round(Math.random()* 127) + 127).toString(16);
  return '#' + r.toString() + g.toString() + b.toString();
}

export default tree; 
