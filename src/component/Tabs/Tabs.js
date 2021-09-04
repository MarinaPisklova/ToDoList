import styles from './Tabs.module.scss';
import Tab from './Tab/Tab';

let Tabs = (props) => {
    const TabsItems = props.tabs.map(tab => <Tab  key={tab.name} tab={tab} onClickTab={props.onClickTab}/>);
    
    return (
        <div className={styles.list__tabs + ' ' + styles.tabs}>{TabsItems}</div>
    )
}

export default Tabs;