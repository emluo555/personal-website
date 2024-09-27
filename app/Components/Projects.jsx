"use client"
import React, {useState} from 'react';
import styles from './Projects.module.css';


const Projects =()=>{
    const [currButton, setCurrButton]= useState(0)

    return(
        <div className="container" id="projects" style={{height:"100vh"}}>
            <div className={styles.body}>
                <h1>Projects</h1>
                <div className="button-grid">
                    <button onClick={()=>setCurrButton(0)}>
                        Software Dev
                    </button>
                    <button onClick={()=>setCurrButton(1)}>
                        ML Research
                    </button>
                    <button onClick={()=>setCurrButton(2)}>
                        Autonomous Vehicles
                    </button>

                </div>
                <div className = "projects-container">
                    
                </div>

                
            </div>
        </div>
    )
    }
export default Projects;
