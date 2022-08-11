import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;

const FootHome = () => {
    return (
        <>
        {/* HTML */}
        <Outlet></Outlet>
        </>
        ) 
    };
    
export default FootHome;