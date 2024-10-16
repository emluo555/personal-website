"use client"
import React, {useState} from 'react';
import styles from './Projects.module.css';
import alp from "../../public/alp.png"
import wakey from "../../public/wakey.png"
import bundle from "../../public/bundle.png"
import tryon from "../../public/tryon.png"
import stereo from "../../public/stereo.png"
import solar from "../../public/solar.png"
import orf from "../../public/orf.png"
import irom from "../../public/irom.png"
import pcis from "../../public/pcis.png"



const ProjectCard =({title, imgLink, date, role, description, tools, githubLink, devpostLink, otherLink})=>{
    const imgs = {
        "alp": alp,
        "wakey": wakey,
        "bundle": bundle,
        "tryon": tryon,
        "stereo": stereo,
        "solar": solar,
        "orf": orf,
        "irom": irom,
        "pcis": pcis
    }
    let source = imgs[imgLink].src

    return(
        <div className={styles.pjc_container}>
            <img src={source} width={"90%"}  ></img>
            <h1 style={{fontSize:'140%', marginTop:'3%'}}>{title}</h1>
            {role != "" ? <span style={{display:'inline'}}><p className={styles.role}>{role}, </p><p className={styles.date}>{date}</p></span>
            :  <span style={{display:'inline'}}><p className={styles.date}>{date}</p></span>}
            
            <div className={styles.desc_container}>
                <p className={styles.desc_text}>{description}</p>
            </div>
            
            {tools != "" && 
            <p className={styles.tools}>
               Tools: {tools} 
            </p>}
            <div className={styles.link_container}>
            {githubLink !="" &&
                <a href={githubLink} target="_blank">Github</a>
            }
            {devpostLink !="" &&
                <a href = {devpostLink} target="_blank">Devpost</a>
            }
            {otherLink !="" &&
                <a href = {otherLink} target="_blank">Website</a>
            }
            </div>
            
        </div>
    )
    }
export default ProjectCard;
