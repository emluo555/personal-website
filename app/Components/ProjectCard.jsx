"use client"
import React, {useState} from 'react';
import styles from './Projects.module.css';

const ProjectCard =(title, imgLink, role, description, tools, githubLink, devpostLink)=>{

    return(
        <div className="container">
            <img></img>
            <h1>{title}</h1>
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
