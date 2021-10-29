import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./Spinner.module.css";

const SpinnerComponent = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <Spinner
        animation='border'
        style={{
          color: "#1d44b8",
          width: "200px",
          height: "200px",
        }}
      ></Spinner>
    </div>
  );
};

export default SpinnerComponent;
