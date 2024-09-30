"use client"
import React, {useState} from 'react';
import styles from './Projects.module.css';
import Image from "next/image";

const ProjectCard =({title, imgLink, role, description, tools, githubLink, devpostLink})=>{
    console.log((imgLink))
    return(
        <div className="container">
            <img src={imgLink} width={"90%"}  ></img>
            <h1 style={{fontSize:'100%'}}>{title}</h1>
            <p>{description}</p>
            {tools != "" && 
            <p>
               {tools} 
            </p>}
            {githubLink !="" &&
                <span>
                    <p></p>
                    <a></a>
                </span>
            }
            {devpostLink !="" &&
                <span>
                    <p></p>
                    <a></a>
                </span>
            }
        </div>
    )
    }
export default ProjectCard;
