import React from "react";
import styles from "./title.module.scss";

export function Title() {
  return (
    <div className={styles.container}>
      <span className={styles.title1}>the</span>
      <span className={styles.title2}>Clash</span>
      <span className={styles.title3}>of cats</span>
      <span className={styles.title4}>NFT</span>
    </div>
  );
}
