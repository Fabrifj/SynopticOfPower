import React from 'react';
import { Outlet, Link } from "react-router-dom";
import styles from './../index.css' ;
import logo from './../images/image.png'
const Layout = () => {
  return (
    <>
        <nav>
            <div className={styles.navbarLeft}>
                <Link to='/'>
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
            </div>
            <div className={styles.navbarRight}>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/political">Politicos</Link>
                </li>
                <li>
                    <Link to="/contact">Contactos</Link>
                </li>
            </ul>
            </div>
        </nav>

      <Outlet />
    </>
  )
};

export default Layout;