import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>High Acuracy </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Zero Lag Time</p>
        </div>
        <button className={styles.btnPrimary}>Know More</button>
        <div className={styles.flexCenter}>
          <img 
            src={assets.fourth}
            alt="fourth"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download