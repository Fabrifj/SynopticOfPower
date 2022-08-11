import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;

const FootHome = () => {
    return (
        <>        
            <footer>
                <div className={styles.footerContainer}>
                    <div className={styles.footerAbout}>
                        <h2>SOBRE NOSOTROS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse, facilis eaque repudiandae nam tempora quaerat dicta ipsum nulla reprehenderit? Quasi commodi tempore quo alias consequuntur, perferendis quos aliquid fugiat!</p>
                    </div>

                    <div className={styles.footerFollow}>
                        <div className={styles.footerFollowUser}>
                            <p>orem ipsum dolor sit amet consectetu</p>
                            <div class={styles.icons}>
                                <a href="https://www.linkedin.com/in/pedro-gustavo-anze-condori-65786a163/" class="fa fa-linkedin"></a>
                            
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.footerCopy}>
                    <small>
                        <b>LabTecnoSocial</b> 
                    </small>
                </div>
            </footer>
        <Outlet/>
        </>
        ) 
    };
    
export default FootHome;