import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './../style.module.css' ;

const MostSearched = () => {
    return (
        <>
            <div className={styles.containerPrimary}>
                <div className={styles.containerProfile}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Evo_Morales_Ayma_%28cropped%29.jpg" alt="evo morales"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a class="" href="">Ver mas  <i class="fa fa-arrow-right"></i></a> 
                </div>

                <div className={styles.containerProfile}>
                    {/* Boton que hace esto  (click)=Funcion()  className={styles.search}) */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/%C3%81lvaro_Garc%C3%ADa_Linera_-_Participante_del_Foro_Internacional_por_la_Emancipaci%C3%B3n_y_la_Igualdad_2011_%28cropped%29.jpg" alt="garcia linera"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alcade_Percy_Fern%C3%A1ndez_en_marzo_de_2015.png/640px-Alcade_Percy_Fern%C3%A1ndez_en_marzo_de_2015.png" alt="percy"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://pbs.twimg.com/profile_images/618889477747032064/pUWInacT_400x400.jpg" alt="manfred"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://cdn.bolivia.com/sdi/2018/10/05/carlos-mesa-sera-candidato-presidencial-en-2019-676246.jpg" alt="carlos mes"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/%C3%81lvaro_Garc%C3%ADa_Linera_-_Participante_del_Foro_Internacional_por_la_Emancipaci%C3%B3n_y_la_Igualdad_2011_%28cropped%29.jpg" alt="garcia linera"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Alcade_Percy_Fern%C3%A1ndez_en_marzo_de_2015.png/640px-Alcade_Percy_Fern%C3%A1ndez_en_marzo_de_2015.png" alt="percy"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>

                <div className={styles.containerProfile}>
                    <img src="https://pbs.twimg.com/profile_images/618889477747032064/pUWInacT_400x400.jpg" alt="manfred"/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sint commodi temporibus laboriosam eveniet, delectus corrupti. Sequi aliquam laborum delectus illo optio, suscipit sapiente veritatis nam ratione provident hic sit.</p>
                    <a href="">Ver mas<i class="fa fa-arrow-right"></i></a>
                </div>
            </div>
            <Outlet />
        </>
        
    ) 
  };
  
  export default MostSearched;