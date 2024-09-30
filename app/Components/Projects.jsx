"use client"
import React, {useState,useRef,useEffect} from 'react';
import styles from './Projects.module.css';
import data from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Projects =()=>{
    const [currButton, setCurrButton]= useState(0)
    const contentRef = useRef(null)

    const swe = data.SWE_projs
    const ML = data.ML_projs
    const AV = data.AV_projs

    const projectsRef = useRef(null);

  useEffect(() => {
    const elements = projectsRef.current.querySelectorAll('.animate');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%", // Start animation when the top of Projects is at 10% of viewport height
          toggleActions: "play none none none", // Actions for entering and leaving the trigger area
        },
      }
    );
  }, []);

  const handleButtonClick = (content) => {
    // Animate out the current content if any
    if (contentRef.current) {
      gsap.to(contentRef.current, { opacity: 0, y: -10, duration: 0.5, onComplete: () => {
          // Update the active content state
          setCurrButton(content);
          // Animate in the new content
          gsap.fromTo(contentRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
        }
      });
    } else {
      setCurrButton(content);
    }
  };

    return(
        <div ref={projectsRef} className="container" id="projects" style={{height:"100vh"}}>
            <div className={`animate ${styles.projects}`}>
                <h1>PROJECTS</h1>
                <div className={`animate ${styles.button_grid}`}>
                    <button onClick={()=>handleButtonClick(0)}>
                        Software Dev & Product
                    </button>
                    <button onClick={()=>handleButtonClick(1)}>
                        ML Research
                    </button>
                    <button onClick={()=>handleButtonClick(2)}>
                        Autonomous Vehicles
                    </button>
                    {/* <Image src={require('../alp.png')} /> */}

                </div>
                <div ref={contentRef} className = {`animate ${styles.projects_container}` }>
                {currButton == 0 && 
                    Object.entries(swe).map(([key, project]) => (
                        <div className = {styles.project_item} key={key}><ProjectCard
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
            <div style={{height:"200px"}}></div>
        </div>
    )
    }
export default Projects;
