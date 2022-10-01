import PropTypes from 'prop-types';
import styles from "../Button/Button.module.css";

export default function Button({onClick, title}) {

    return (
        <button className={styles.btn} type="button" onClick={onClick}>
            {title}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
}