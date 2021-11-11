import React from "react";
import gif from "../../../../assets/images/1.gif";
import styles from "./gif.module.scss";

export function Gif() {
  return (
    <div className={styles.frame}>
      <img src={gif} alt="clash of cats gif" />
    </div>
  );
}
