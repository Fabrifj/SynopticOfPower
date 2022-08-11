import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;

const MostSearchedItem = () => {
    return (
        <>
        <div className={styles.containerProfile}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Evo_Morales_Ayma_%28cropped%29.jpg" alt="evo morales"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
            <a class="" href="">Ver mas  <i class="fa fa-arrow-right"></i></a> 
        </div>
        <Outlet></Outlet>
        </>
        ) 
    };
    
export default MostSearchedItem;