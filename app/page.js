
'use client'
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Mainpage from './Components/Mainpage';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Navbar from "./Components/Navbar"
import {useEffect, useRef} from 'react'

// Register the ScrollTrigger plugin with GSAP
//gsap.registerPlugin(ScrollTrigger);
import gsap from 'gsap';


export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {

  let ctx = gsap.context(() => {
    let t1 = gsap.timeline()
    t1.from(["#to-animate"], {
      opacity: 0,
      duration:1,
    })},containerRef);  // Attach context to the ref

    return () => ctx.revert();  // Clean up GSAP context on unmount
  }, []);

  return (
    <div ref={containerRef}>
      <div id="to-animate">
      <Navbar/>
      <Mainpage/>

      <Projects/>
      {/* <Resume/> */}
      
    </div>
    </div>
    
  );
}

