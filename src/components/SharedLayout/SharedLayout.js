import { Outlet, NavLink } from "react-router-dom";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
    let activeClassName = "underline";
    return (
        <>
            <div className={styles.header}>
                <nav className={styles.links}>
                    <NavLink activeClassName={styles.active}  to="/" >Home</NavLink>
                    <NavLink activeClassName={styles.active}  to="/movies">Movies</NavLink>
                </nav>
            </div>
        <Outlet />
        </>
    );
};