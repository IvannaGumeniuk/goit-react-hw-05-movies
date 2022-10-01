import styles from "../../components/Loader/Loader.module.css";

export default function Loader() {
    return (
        <div className={styles.BoxLoader1}>
            <div className={styles.BoxLoader2}>
                <h2 className={styles.loader_text} data-text="Loading...">
                Loading...
                </h2>
            </div>
        </div>
    );
}