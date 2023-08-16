import React from "react";
import styles from './HomeScreen.module.css'
import NavigationBar from "../components/NavigationBar";

function HomeScreen() {
  return (
    <>
    <div className={styles.main}>
    <NavigationBar />

      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            <div className={styles.header}>
            Shaheer Khan
            </div>
            <div>
            Computer Science Student | Full-Stack Development
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomeScreen;
