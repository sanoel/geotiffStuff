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

    return ( 
      <div className={styles['panel-tabs']}>
        <button type="button" className={styles[this.props.sortMode==='Soil Maps' ? 'selected-panel-tab' : 'panel-tab']} onClick={() => signals.panelTabClicked({newSortMode: 'Soil Map'})}>
          Soil Maps
        </button>
        <button type="button" disabled className={styles[this.props.sortMode==='Lots' ? 'selected-panel-tab' : 'panel-tab']} onClick={() => signals.panelTabClicked({newSortMode: 'Lots'})}>
          Lots
        </button>
        <button type="button" disabled className={styles[this.props.sortMode==='Soil Analysis' ? 'selected-panel-tab' : 'panel-tab']} onClick={() => signals.panelTabClicked({newSortMode: 'Soil Analysis'})}>
          Soil Analysis
        </button> 
        <button type="button" disabled className={styles[this.props.sortMode==='Foliar Analysis' ? 'selected-panel-tab' : 'panel-tab']} onClick={() => signals.panelTabClicked({newSortMode: 'Foliar Analysis'})}>
          Foliar Analysis
        </button> 
        <button type="button" disabled className={styles[this.props.sortMode==='Info' ? 'selected-panel-tab' : 'panel-tab']} onClick={() => signals.panelTabClicked({newSortMode: 'Info'})}>
          Info
        </button>
      </div>
    );
  }
}
export default PanelTabs;
