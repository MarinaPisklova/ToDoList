import React from 'react';
import styles from './Header.module.scss';
import Clock from '../Clock/Clock';

let Header = (props) => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>My ToDo list</h1>
            <Clock />
        </div>
    )
}

export default Header;