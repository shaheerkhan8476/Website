import React from "react";
import styles from './HomeScreen.module.css'
import NavigationBar from "../components/NavigationBar";
import yourName from "./yourName.mp4";
function HomeScreen() {
  return (
    <>
     <div className={styles.main}>
        <video 
            autoPlay 
            loop 
            muted 
            className={styles.backgroundVideo}
            playsInline 
            >
          <source src={yourName} type="video/mp4" />
        </video>
    <NavigationBar />
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
            <div className={styles.header}>
            Shaheer Khan
            </div>
            <div className={styles.content}>
            Computer Science Student | Full-Stack Developer | Junior at Michigan State University 
            </div>
            <div className={styles.links}>
              <div className={styles.logo}>
                
              </div>
              <div className={styles.logo}>
                
              </div>
              <div className={styles.logo}>
                
              </div>
              <div className={styles.logo}>
                
              </div>
              <div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HomeScreen;
