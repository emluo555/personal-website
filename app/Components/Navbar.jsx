"use client"
import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className = {styles.navbar}>
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
                    <li>
                        <Link
                            activeClass="active"
                            to="resume"
                            spy={true}
                            smooth={true}
                            duration={500}>
                            resume
                        </Link>
                    </li>
                </ul>
        </div>
        </div>
    );
};
export default Navbar;