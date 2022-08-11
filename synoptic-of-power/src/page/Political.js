import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;

const Political = () => {
  return (
    <>
    {/* HTML */}
    <Outlet></Outlet>
    </>
    ) 
};
  
  export default Political;