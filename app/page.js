
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Mainpage from './Components/Mainpage';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Navbar from "./Components/Navbar"
// Register the ScrollTrigger plugin with GSAP
//gsap.registerPlugin(ScrollTrigger);


export default function Home() {


  return (
    <div>
      <Navbar/>
      <Mainpage/>
      <Projects/>
      <Resume/>
    </div>
  );
}

