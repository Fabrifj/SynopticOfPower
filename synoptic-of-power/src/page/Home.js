import React from 'react';
import styles from './../style.module.css' ;
import { Outlet,Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import image from "../images/image2.png";


// Components
import MostSearched from '../components/MostSearched';
// Functions 

const Home = () => { 
    return (
      <>
        <div className={styles.containerSearch}>
          <img src={image} alt="logo"/>

          <div className={styles.search}>
              <input className={styles.searchTerm} placeholder="Búsqueda"/>
              <Link  className={styles.searchButton} to='/SearchPage'>
                  <button className={styles.buttonSearch}>        
                  <IconButton aria-label="back" >
                  <SearchIcon  sx={{color:'#fff'}}/>
                  </IconButton></button>
              </Link >
          </div>
          
        </div>
        <MostSearched></MostSearched>
        <Outlet />
      </>
    )
  };
  
  export default Home;