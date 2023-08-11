import styles from "./NavigationBar.module.css";
import React from "react";
import { Link } from "react-router-dom";
function NavigationBar() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.buttonContainer}>
                <Link to='/'>About Me</Link>
            </div>
            <div className={styles.buttonContainer}>
            <Link to='/experiences'>Experiences</Link>
            </div>
            <div className={styles.buttonContainer}>
            <Link to='/Projects'>Projects</Link>
            </div>
            <div className={styles.buttonContainer}>
            <Link to='/Hobbies'>Hobbies</Link>
            </div>
        </div>
    );
};

export default NavigationBar;