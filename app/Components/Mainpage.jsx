"use client"
import { React, useLayoutEffect, useRef } from "react"
import styles from './Mainpage.module.css';
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";



const Mainpage =()=>{
    const comp = useRef(null)
    const words = ["a Software Developer & PM", "a Self-Driving Car Enthusiast", "a ML & AV Researcher", "a Hackathon Super Fan", "a Distance Runner & Dancer"]
    gsap.registerPlugin(TextPlugin);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          const t1 = gsap.timeline()
          t1.from(["#title-1"], {
              opacity: 0,
              y: "-=300",
              duration:1,
            },0.2).from(["#title-2"], {
                opacity: 0,
                y: "+=300",
                duration:1,
              },0.2).from(["#title-3"],{
                opacity: 0,
                y: "+=100",
                duration:1,},1.5
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
                t2Text.to('#animated-text',{duration:2, text:word});
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
                <h2 id="title-1">Hi! My name is</h2>
                <h1 id="title-2">Emily Luo</h1>
                <span id="title-3" style={{ display: "flex", justifyContent: "center", width:"150%" }}><h3 >I am </h3><h3 id="animated-text" style={{marginLeft:"1%"}}></h3><h3 id="cursor">_</h3></span>
            </div>
        </div>
    )
    }
export default Mainpage;
