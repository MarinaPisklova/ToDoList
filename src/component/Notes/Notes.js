import Note from './Note/Note';
import styles from './Notes.module.scss';

let Notes = (props) => {
    const ToDoItems = props.notes.map(note => <Note key={note.text} note={note} deleteNote={props.deleteNote} onChangeStatus={props.onChangeStatus} />);
    
    return (
        <ul className={styles.list__items + ' ' + styles.items}>{ToDoItems}</ul>
    )
}

export default Notes;