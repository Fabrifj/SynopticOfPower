import React from 'react';
import styles from './../index.css' ;
import { Outlet,Link } from "react-router-dom";
const Home = () => { 
    return (
      <>
        <div className={styles.containerSearch}>
          <img src="/image2.png" alt="logo"/>

          <div className={styles.search}>
              <input className={styles.searchTerm} placeholder="Búsqueda"/>
              <button  type="submit" className={styles.searchButton}>
                  <i className={styles.fafaSearch}></i>
              </button>
          </div>
          <div className={styles.containerBotones}>
              <Link className={styles.ButtonSecundary} to="/">Redes Sociales</Link>
              <Link className={styles.ButtonSecundary} to="/">Fortuna</Link>
              <Link className={styles.ButtonSecundary} to="/">Procesos</Link>
          </div>
          <h1>Los mas buscados</h1>
        </div>
        <Outlet />
      </>
    )
  };
  
  export default Home;