"use client"
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import gsap from 'gsap';
import { React, useLayoutEffect, useRef } from "react"



const Navbar = () => {
    const nav = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          const t2 = gsap.timeline()
          t2.from(["#nav-container"], {
              opacity: 0,
              duration:2,
            },0.2)
        }, nav)
        return () => ctx.revert()
  }, [])
    return (
        <div className={styles.container} ref={nav} >
            <div className = {styles.navbar} id="nav-container" >
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="mainpage"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            projects
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            resume
                        </Link>
                    </li> */}
                </ul>
        </div>
        </div>
    );
};
export default Navbar;