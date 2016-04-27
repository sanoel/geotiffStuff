import React, { PropTypes } from 'react';
import { Decorator as Cerebral, Link } from 'cerebral-view-react';
import styles from './panel-tabs.css';

@Cerebral((props) => {
  return {
    selectedTab: ['home', 'view', 'sort_mode'],
  };
})

class PanelTabs extends React.Component {

  static propTypes = {
  
  };

  render() {

    const signals = this.props.signals.home;
    /*
      <button type="button" className={styles[this.props.sortMode==='fields' ? 'selected-sorting-tab' : 'sorting-tab']} onClick={() => signals.sortingTabClicked({newSortMode: 'fields'})}>
        Lots
      </button>
      <button type="button" className={styles[this.props.sortMode==='tags' ? 'selected-sorting-tab' : 'sorting-tab']} onClick={() => signals.sortingTabClicked({newSortMode: 'tags'})}>
        Soil Analysis
      </button> 
      <button type="button" className={styles[this.props.sortMode==='tags' ? 'selected-sorting-tab' : 'sorting-tab']} onClick={() => signals.sortingTabClicked({newSortMode: 'tags'})}>
        Foliar Analysis
      </button> 
      <button type="button" className={styles[this.props.sortMode==='tags' ? 'selected-sorting-tab' : 'sorting-tab']} onClick={() => signals.sortingTabClicked({newSortMode: 'tags'})}>
         Info
      </button>
    */

    return ( 
      <div className={styles['sorting-tabs']}>
        <button type="button" className={styles[this.props.sortMode==='all' ? 'selected-sorting-tab' : 'sorting-tab']} onClick={() => signals.sortingTabClicked({newSortMode: 'all'})}>
          Soil Maps
        </button>
      </div>
    );
  }
}
export default PanelTabs;
