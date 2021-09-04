import styles from './Warning.module.scss';

let Warning = (props) => {
    let message = "Длина записи не может превышать " + props.messageLength + " символов";

    return (
        <div>
            {
                !props.isLengthMatch && <p className={styles.input__warning}>{message}</p>
            }
        </div>
    )
}

export default Warning;