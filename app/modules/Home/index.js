import { updateLocation, removeNote, addNewNote, changeShowHideState, changeSortMode, textInputChanged, selectNote, selectMapListItem } from './chains';
import uuid from 'uuid';
import tree from './stateTree.js';
import { dropPoint } from './mapchain';

export default (options = {}) => {
  return (module, controller) => {
    module.addState(
      tree
    );

    module.addSignals({

      locationFound: [
        ...updateLocation
      ],

      mapListItemClicked: [
        ...selectMapListItem
      ],
      
      sortingTabClicked: [
      ...changeSortMode
      ],

      noteSelected: [
        ...selectNote
      ], 

      deleteNoteButtonClicked: [
        ...removeNote
      ],
 
      noteTextChanged: [
        ...textInputChanged
      ],

      clickedShowHideButton: [
        ...changeShowHideState
      ],

      mouseDownOnMap: [
        ...dropPoint
      ],

      addNoteButtonClicked: [
        ...addNewNote,
      ],

    })
  };
}
