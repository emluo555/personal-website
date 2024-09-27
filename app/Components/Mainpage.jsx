"use client"
import React from 'react';
import styles from './Mainpage.module.css';
import gsap from 'gsap';


const Mainpage =()=>{
    return(
        <div className={styles.container}id="mainpage">
            <div className={styles.text}>
                <h2>Hi! My name is</h2>
                <h1>Emily Luo</h1>
            </div>
        </div>
    )
    }
export default Mainpage;
