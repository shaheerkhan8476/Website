import React from "react";
import NavigationBar from "../components/NavigationBar";
import styles from "./ExperienceScreen.module.css";
import msu from "./msulogo.png";
import imagine from "./imagine.png";
import tyler from "./tyler.png";
function ExperienceScreen() {
  return (
    <>
      <NavigationBar />
      <div className={styles.timeline}>
        <div className={styles.cardRow}>
          <div className={`${styles.card} ${styles.circleCard}`}>
            <img src={msu} alt="MSU Logo" className={styles.circleCardImage} />
          </div>
          <div className={`${styles.card} ${styles.descriptionCard}`}>
            <div>Jan. 2023 - Present: CSE 231 Teaching Assistant</div>
            
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={`${styles.card} ${styles.circleCard}`}>
            <img
              src={imagine}
              alt="MSU Logo"
              className={styles.circleCardImage}
            />
          </div>
          <div className={`${styles.card} ${styles.descriptionCard}`}>
            Jan. 2023 - Present: Co-Founder & Vice-President
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={`${styles.card} ${styles.circleCard}`}>
            <img
              src={tyler}
              alt="MSU Logo"
              className={styles.circleCardImage}
            />
          </div>
          <div className={`${styles.card} ${styles.descriptionCard}`}>
            May 2023 - Aug. 2023: Software Engineering Intern
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperienceScreen;
