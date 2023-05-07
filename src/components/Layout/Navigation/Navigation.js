import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Link to="/"><img className={styles.image} src="./task.png" alt=""/></Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          {/* <Link to="/register">Register</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
