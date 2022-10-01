import styles from "../../pages/NotFound/NotFound.module.css";
import notFoundImg from "../../imeges/notFoundImg.jpg";

export default function NotFound() {
    return (
        <div>
            <img className={styles.img} src={notFoundImg} alt="NotFound"></img>
        </div>
        
    )
}



