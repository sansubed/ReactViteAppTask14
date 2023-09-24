import React, { useState } from "react";
import styles from "./advertisement.module.css";

function Advertisement() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <div className={styles.modal}>
          Advertisement
          <button className={styles.btn} onClick={() => setOpen(!open)}>
            X
          </button>
        </div>
      )}
    </>
  );
}

export default Advertisement;
