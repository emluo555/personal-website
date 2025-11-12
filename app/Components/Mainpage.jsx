"use client"
import { React, useLayoutEffect, useRef } from "react"
import styles from './Mainpage.module.css';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import Spline from '@splinetool/react-spline/next';
import dynamic from 'next/dynamic';
//const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const Mainpage =()=>{
    const comp = useRef(null)
    const words = ["a Software Developer", "a Machine Learning & Robotics Researcher", "a Self-Driving Car Enthusiast", "a Hackathon Fan", "a Distance Runner & Dancer"]
    gsap.registerPlugin(TextPlugin);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
        const t1 = gsap.timeline()
        t1.fromTo("#title-1", 
            { opacity: 0, y: -300 }, 
            { opacity: 1, y: 0, duration: 1 },  
            0.2
        ).fromTo("#title-2",
            { opacity: 0, y: 300 },
            { opacity: 1, y: 0, duration: 1 },
            0.2
        ).fromTo("#splineview",
            { opacity: 0 },
            { opacity: 1, duration: 2 },
            0.2
        ).fromTo("#title-3",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1 },
            1.5
        ).fromTo("#icons",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1 },
            1.8
        )
    }, comp)
        let ctx2 = gsap.context(()=> {
            gsap.to("#cursor",{
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: "power2.out",
            },0.5)
            let t2 = gsap.timeline({repeat: -1, delay:1.8})
            words.forEach((word)=> {
                let t2Text = gsap.timeline({repeat: 1, yoyo:true});
                t2Text.to('#animated-text',{duration:1.7, text:word});
                t2.add(t2Text)
            })
        })

        return () => {
            ctx.revert()
            ctx2.revert()
        }
  }, [])


    return(
        <div className={styles.container}id="mainpage" ref={comp}>
            <div className={styles.text}>
                <h2 id="title-1" style={{ opacity: 0, transform: 'translateY(-300px)' }}>Hi! My name is</h2>
                <h1 id="title-2" style={{ opacity: 0, transform: 'translateY(-300px)' }}>Emily Luo</h1>
                <span id="title-3" style={{ display: "flex", width:"150%", opacity: 0, transform: 'translateY(100px)' }}><h3 >I am</h3><h3 id="animated-text" style={{marginLeft:"6px"}}></h3><h3 id="cursor">_</h3></span>
                <div id="icons" style={{ opacity: 0, transform: 'translateY(100px)' }} className='' >
                    <a href="https://github.com/emluo555" target="_blank">
                    <img className={styles.icon_item} src='/github.png' alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/emily-luo04/" target="_blank">
                    <img className={styles.icon_item} src='/linkedin.png' alt="linkedin" />
                    </a>
                    <a href="mailto:emilyluo555@gmail.com" target="_blank">
                    <img className={styles.icon_item} src='/email.png' alt="email" />
                    </a>
              </div>
            </div>
            <div className={styles.splineContainer}id="splineview" >
            
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/T82Ey2dKkszDLQGS/scene.splinecode"></spline-viewer> 
            </div>
        </div>
    )
    }
export default Mainpage;
