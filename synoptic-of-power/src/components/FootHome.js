import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;
import logoLab from "../images/logoLab2.png"
import InstagramIcon from '@mui/icons-material/Instagram';

const FootHome = () => {
    return (
        <>        
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.footerAbout}>
                        <img src={logoLab}></img>
                        <p>Sinoptico del Poder</p>
                        <p>Desarrollado por Lab LabTecnoSocial</p>
                        <div class={styles.icons}>

                    </div>
                    </div>

                </div>

            </footer>
        <Outlet/>
        </>
        ) 
    };
    
export default FootHome;