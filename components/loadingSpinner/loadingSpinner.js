import React from "react";
import styles from "./loadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}></div>
    </div>
  );
}
export default LoadingSpinner;
