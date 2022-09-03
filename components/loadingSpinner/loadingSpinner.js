import React from "react";
import styles from "./loadingSpinner.module.css";

function LoadingSpinner({ className, size }) {
  return (
    <div className={`flex justify-center ${className} `}>
      <div className={`${styles.loading_spinner} ${size}`}></div>
    </div>
  );
}
export default LoadingSpinner;
