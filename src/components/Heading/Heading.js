import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ title, text, padding }) => {
  return (
    <div className={styles.heading} style={{ paddingLeft: padding && "15px" }}>
      <h1 className={styles.title}> {title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Heading;
