import React from 'react';
import styles from './Note.module.scss'
import trash from '../../../images/trash.svg'

let Note = (props) => {
    let deleteThisNote = () => {
        props.deleteNote(props.note.id);
    }

    let changeStatus = () => {
        props.onChangeStatus(props.note.id);
    }

    return (
        <div>
            <li className={styles.note}>
                <div className={styles.note__container}>
                    <div className={styles.note__checkbox + ' ' + styles.checkbox}>
                        <input className={styles.checkbox__input} id='checkbox' type='checkbox' onChange={changeStatus} checked={props.note.status}></input>
                        <label className={styles.checkbox__label}></label>
                    </div>
                    <div className={styles.note__text + ' ' + styles.text} onClick={changeStatus}>{props.note.text}</div>
                </div>
                <img className={styles.note__trash} onClick={deleteThisNote} src={trash} alt="trash"></img>
            </li>
        </div>
    )
}

export default Note