import styles from './Tab.module.scss';

let Tab = (props) => {
    let onClickTab = () =>{
        props.onClickTab(props.tab.type);
    }

    return (
        <div className={props.tab.isActive ? (styles.tabs__item + " " + styles.tabs__item_active) : styles.tabs__item} onClick={onClickTab}>{props.tab.name}</div>
    )
}

export default Tab;
