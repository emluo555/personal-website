"use client"
import React, {useState,useRef,useEffect} from 'react';
import styles from './Projects.module.css';
import data from '../data/projects.json';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Projects =()=>{
    const [currButton, setCurrButton]= useState('all')
    const contentRef = useRef(null)

    const swe = data.SWE_projs
    const ML = data.ML_projs
    const AV = data.AV_projs

    const getAllProjects = () => {
      const allProjects = [];
      Object.entries(swe).forEach(([key, project]) => {
        allProjects.push({ ...project, key: `swe-${key}`, category: 'Software Dev & Product' });
      });
      Object.entries(ML).forEach(([key, project]) => {
        allProjects.push({ ...project, key: `ml-${key}`, category: 'ML Research' });
      });
      Object.entries(AV).forEach(([key, project]) => {
        allProjects.push({ ...project, key: `av-${key}`, category: 'Autonomous Vehicles' });
      });

      // sort by date
      return allProjects.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB - dateA;
      });
    };

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

  const renderProjects = () => {
    
    if (currButton === "all") {
      return getAllProjects().map((project) => {
        const { key, ...projectProps } = project; // Destructure to separate key from other props
        return (
          <div key={key} style={{ marginBottom: '1.5rem' }}>
            <ProjectCard {...projectProps} />
          </div>
        );
      });
    }
    //   return getAllProjects().map((project) => (
    //     <div key={project.key} style={{ marginBottom: '1.5rem' }}>
    //       <ProjectCard {...project} />
    //     </div>
    //   ));
    // }
    if (currButton === 'swe') {
      return Object.entries(swe).map(([key, project]) => (
        <div key={key} style={{ marginBottom: '1.5rem' }}>
          <ProjectCard {...project} />
        </div>
      ));
    }

    if (currButton === 'ml') {
      return Object.entries(ML).map(([key, project]) => (
        <div key={key} style={{ marginBottom: '1.5rem' }}>
          <ProjectCard {...project} />
        </div>
      ));
    }

    if (currButton === 'av') {
      return Object.entries(AV).map(([key, project]) => (
        <div key={key} style={{ marginBottom: '1.5rem' }}>
          <ProjectCard {...project} />
        </div>
      ));
    }
  }

    return(
        <div ref={projectsRef} className="container" id="projects" style={{height:"100vh"}}>
            <div className={`animate ${styles.projects}`}>
                <h1>PROJECTS</h1>
                <div className={`animate ${styles.button_grid}`}>
                  <button onClick={()=>handleButtonClick('all')}
                    className={currButton === 'all' ? styles.selected : ''}>
                        All
                    </button>
                    <button onClick={()=>handleButtonClick('swe')}
                      className={currButton === 'swe' ? styles.selected : ''}>
                        Software Dev & Product
                    </button>
                    <button onClick={()=>handleButtonClick('ml')}
                      className={currButton === 'ml' ? styles.selected : ''}>
                        ML Research
                    </button>
                    <button onClick={()=>handleButtonClick('av')}
                      className={currButton === 'av' ? styles.selected : ''}>
                        Robotics
                    </button>
                    {/* <Image src={require('../alp.png')} /> */}

                </div>
                <div ref={contentRef} className = {`animate ${styles.projects_container}` }>
                  {renderProjects()}  
                </div>
            </div>
            <div style={{height:"200px"}}></div>
        </div>
    )
    }
export default Projects;
