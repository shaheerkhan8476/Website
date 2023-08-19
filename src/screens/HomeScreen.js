import React from "react";
import styles from "./HomeScreen.module.css";
import NavigationBar from "../components/NavigationBar";
import yourName from "./yourName.mp4";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import resume from "./Resume.pdf";
import firstPic from "./firstPic.png"


function HomeScreen() {
  return (
    <>
      <div className={styles.main}>
      <video
          autoPlay
          muted
          className={styles.backgroundVideo}
          playsInline
          poster = {firstPic}
        >
          <source src={yourName} type="video/mp4" />
        </video>
        <div className={styles.homeContainer}>
          <div className={styles.textContainer}>
            <div className={styles.header}>Shaheer Khan</div>
            <div className={styles.logoSection}>
              <Link to="https://www.linkedin.com/in/shaheerkhan8476/">
                <div className={styles.logo}>
                  <FontAwesomeIcon
                    className={styles.linkedIn}
                    icon={faLinkedin}
                    bounce
                  />
                </div>
              </Link>
              <Link to="https://github.com/shaheerkhan8476">
                <div className={styles.logo}>
                  <FontAwesomeIcon
                    className={styles.gitHub}
                    icon={faGithub}
                    bounce
                  />
                </div>
              </Link>
              <a href="mailto: shaheerkhan8476@gmail.com">
                <div className={styles.logo}>
                  <FontAwesomeIcon
                    className={styles.email}
                    icon={faEnvelope}
                    bounce
                  />
                </div>
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <div className={styles.logo}>
                  <FontAwesomeIcon
                    className={styles.file}
                    icon={faFile}
                    bounce
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
