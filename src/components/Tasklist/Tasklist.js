import React from "react";
import Taskcard from "../Taskcard/Taskcard";
import styles from "./Tasklist.module.css"

function Tasklist({ tasks, getTasks, setOpenUpdateTask }) {
  return (
    <div className={styles.tasklist}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <Taskcard key={task._id} task={task} getTasks={getTasks} setOpenUpdateTask={setOpenUpdateTask}/>)
      ) : (
        <div className="">
          {" "}
          <h2>No Task yet</h2>{" "}
        </div>
      )}
    </div>
    
  );
}

export default Tasklist;
