import uuid from 'uuid';
import classes from './soil_props/Classes.js';
import ca from './soil_props/ca.js';
import cec from './soil_props/cec.js';
import b from './soil_props/b.js';
import mg from './soil_props/mg.js';
import cu from './soil_props/cu.js';
import mn from './soil_props/mn.js';
import om from './soil_props/om.js';
import oc from './soil_props/oc.js';
import clay from './soil_props/clay.js';
import al from './soil_props/al.js';
//import p from './soil_props/p.js';
//import ph from './soil_props/ph.js';
//import s from './soil_props/s.js';
//import sand from './soil_props/sand.js';
//import silt from './soil_props/silt.js';
//import zn from './soil_props/zn.js';


var soil_props = {
  OC: oc,
  OM: om,
//  P: p,
//  S: s,
  Ca: ca,
  Mg: mg,
//  K: k,
//  Na: na,
  CEC: cec,
  B: b,
//  Fe: fe,
  Cu: cu,
  Mn: mn,
//  Zn: zn,
//  Sand: sand,
//  Silt: silt,
  Clay: clay,
 // pH: ph,
  Classes: classes,
};

var tree = {

  map_list: soil_props,
  
  model: {
    gps: {
      has_location: false,
      user_location: {},
      accuracy: {},
    },
    selected_map: 'Mg',
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
