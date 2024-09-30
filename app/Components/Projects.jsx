"use client"
import React, {useState} from 'react';
import styles from './Projects.module.css';
import data from '../data/projects.json';
import ProjectCard from './ProjectCard';


const Projects =()=>{
    const [currButton, setCurrButton]= useState(0)
    const swe = data.SWE_projs
    const ML = data.ML_projs
    const AV = data.AV_projs

    console.log(swe)
    return(
        <div className="container" id="projects" style={{height:"100vh"}}>
            <div className={styles.projects}>
                <h1>PROJECTS</h1>
                <div className={styles.button_grid}>
                    <button onClick={()=>setCurrButton(0)}>
                        Software Dev & Product
                    </button>
                    <button onClick={()=>setCurrButton(1)}>
                        ML Research
                    </button>
                    <button onClick={()=>setCurrButton(2)}>
                        Autonomous Vehicles
                    </button>
                    {/* <Image src={require('../alp.png')} /> */}

                </div>
                <div className = {styles.projects_container}>
                {currButton == 0 && 
                    Object.entries(swe).map(([key, project]) => (
                        <div className = {styles.project_item}><ProjectCard
                          key={key}
                          title={project.title}
                          date={project.date}
                          imgLink={project.imgLink}
                          role={project.role}
                          description={project.description}
                          tools={project.tools}
                          githubLink={project.githubLink}
                          devpostLink={project.devpostLink}
                          otherLink={project.otherLink}
                        /></div>
                      ))}
                    {currButton == 1 && 
                    Object.entries(ML).map(([key, project]) => (
                        <div className = {styles.project_item}><ProjectCard
                          key={key}
                          title={project.title}
                          date={project.date}
                          imgLink={project.imgLink}
                          role={project.role}
                          description={project.description}
                          tools={project.tools}
                          githubLink={project.githubLink}
                          devpostLink={project.devpostLink}
                          otherLink={project.otherLink}
                        /></div>
                      ))}
                    {currButton == 2 && 
                    Object.entries(AV).map(([key, project]) => (
                        <div className = {styles.project_item}><ProjectCard
                          key={key}
                          title={project.title}
                          date={project.date}
                          imgLink={project.imgLink}
                          role={project.role}
                          description={project.description}
                          tools={project.tools}
                          githubLink={project.githubLink}
                          devpostLink={project.devpostLink}
                          otherLink={project.otherLink}
                        /></div>
                      ))}
                </div>

                
            </div>
        </div>
    )
    }
export default Projects;
