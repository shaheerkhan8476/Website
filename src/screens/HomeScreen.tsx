import React from "react";
import styles from "./HomeScreen.module.css";
import NavigationBar from "../components/NavigationBar.tsx";

function HomeScreen() {
  return (
    <>
    <div className={styles.main}>
    <NavigationBar />

      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            Hi
        </div>
        <div className={styles.imageContainer}>
            Hello
        </div>
      </div>
    </div>
    </>
  );
}

export default HomeScreen;
