import React from "react";

import imageLogo from "../../../../images/imageLogo.svg";
import styles from "./ImageVideo.module.css";

const ImageVideo = ({ title }) => {
  return (
    <section className={`${styles.uploadingPhoto}`}>
      <div className={styles.headingAndPhoto}>
        <h3 className={styles.heading}>Image, Video</h3>
        <div className={styles.photoContainer}>
          <img src={imageLogo} alt="#" className={styles.imageLogo} />
        </div>
      </div>
    </section>
  );
};

export default ImageVideo;
