import React from "react";
import NavigationBar from "../components/NavigationBar";
import styles from "./ExperienceScreen.module.css";
import msu from "./msulogo.png";
import imagine from "./imagine.png";
import tyler from "./tyler.png";
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import { useState } from "react";


function ExperienceScreen() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      image: msu,
      alt: "MSU Logo",
      text: "Jan. 2023 - Present: CSE 231 Teaching Assistant",
      description:
       `Instructed fundamental object-oriented programming concepts in Python to a 40-student class weekly, articulating technical challenges and solutions, leading to a 15% improvement in class average grades.
    
        Facilitated student learning through hands-on assistance, expanding students' ability to design and implement algorithms in Python.
    
        Developed student success initiatives in weekly strategy meetings, demonstrating leadership and effective communication.`
    },
    
    {
      id: 2,
      image: imagine,
      alt: "Imagine Logo",
      text: "Jan. 2023 - Present: Co-Founder & Vice-President",
      description:
       `Facilitated an internship-like experience for 40+ students, implementing Agile methodologies and collaboration on software designs using Flutter, TypeScript, React.js.
      
        Managed 3+ project teams in web and mobile development, ensuring 100% client satisfaction, demonstrating leadership and ability to lead critical projects.
      
        Conducted meetings with faculty and staff, ensuring quality in the design and execution of student projects.`
    },
    {
      id: 3,
      image: msu,
      alt: "MSU Logo",
      text: "Sep. 2021 - Present: Research Assistant",
      description: 
      `Tracked research on cognition, utilizing Qualtrics for statistical analysis and data mining, contributing to understanding key trends.

      Organized and led studies with 10+ participants, gaining experience in complex data collection and analysis.

      Conducted experiments using EEG sensors, reflecting an aptitude for technology and innovation.`
    },
    {
      id: 4,
      image: tyler,
      alt: "Tyler Technologies Logo",
      text: "May 2023 - Aug. 2023: Software Engineering Intern",
      description: 
      `Collaborated with a 20+ Agile software engineering team, contributing to innovative solutions aligned with distributed computing environments.

      Modernized an existing internal system using Angular.js and TypeScript, redesigning the UI to enhance user experience.

      Utilized Microsoft Reporting API in conjunction with C# to manipulate a MySQL database, enabling support for multiple input parameters.
      `
    },
  ];
  
  return (
    
    <>
    
    <NavigationBar />
    <div className={styles.root} >
      <div>
      {
        !selectedId ? <>
        <div className={styles.timeline}>
        {items.map(item => (
          <div className={styles.cardRow}>
            <div className={`${styles.card} ${styles.circleCard}`}>
              <img src={item.image} alt={item.alt} className={styles.circleCardImage} />
            </div>
            <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)} className={`${styles.card} ${styles.descriptionCard}`}>
              <motion.text className={styles.date}>{item.text}</motion.text>
            </motion.div>
          </div>
        ))}
      </div>
        </>:<></>
      }
      </div>
      <div className= {styles.centerCard}>
      
      <AnimatePresence>
        {selectedId && (
          <div className = {styles.cardFormat}>
          <motion.div  layoutId={selectedId} className={styles.overlay}>
            <motion.h5 className={styles.cardTitle}>{items[selectedId-1].description}</motion.h5>
            <motion.button  className={styles.cardButton} onClick={() => setSelectedId(null)}>x</motion.button>
          </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      </div>
    </div>
    </>
  );
}
export default ExperienceScreen