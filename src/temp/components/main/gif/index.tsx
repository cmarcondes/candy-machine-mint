import React from "react";
import gif from "../../../../assets/images/gif.gif";
import hiddenGif from "../../../../assets/images/hidden_gif.gif";
import styles from "./gif.module.scss";

export function Gif({ isHidden = false }: { isHidden?: boolean }) {
  return (
    <div className={styles.frame}>
      <img src={isHidden ? hiddenGif : gif} alt="clash of cats gif" />
    </div>
  );
}
