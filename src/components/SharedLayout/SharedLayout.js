import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import Button from "components/Button/Button";
import Loader from "../Loader/Loader";
import styles from "./SharedLayout.module.css";

export default function SharedLayout() {
    // const navigate = useNavigate();
    // const clickGoBack = () => {
    //     navigate(-1);
    // };
    
// const navigate = useNavigate();
//    const clickGoBack = () => {
//       if (window.history.state && window.history.state.idx > 0) {
//          navigate(-1);
//       } else{
//          navigate('/', { replace: true });
//        }
//     };
    
return (
    <div>
        <div className={styles.navigation}>
            <nav className={styles.nav}>
                <NavLink to="/" end className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`}> Home </NavLink>
        
                <NavLink to="/movies" className={({ isActive }) =>
                    isActive ? `${styles.active}` : `${styles.inactive}`}> Movies </NavLink>
            </nav>
            {/* <button><Link to={clickGoBack}>Go Back</Link></button> */}
            {/* <Button onClick={clickGoBack} title="Go back" /> */}
        </div>
        
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </div>
    );
};