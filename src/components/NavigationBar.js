import styles from "./NavigationBar.module.css";
import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      
      <div className={styles.mainContainer}>
        <div className={styles.buttonContainer}>
          <Link to="/">
            <div className={styles.buttonText}>Home</div>
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/experiences">Experiences</Link>
        </div>
        
        
      </div>
     
    </>
  );
}

export default NavigationBar;
