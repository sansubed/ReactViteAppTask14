import React from "react";
import styles from "./advertisement.module.css";

function Advertisement() {
  return (
    <>
      <div className={styles.modal}>
        Advertisement
        <button className={styles.btn}>X</button>
      </div>
    </>
  );
}

export default Advertisement;
