import React from "react";
import styles from "./Taskcard.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config";

function Taskcard({ task, getTasks }) {

  const removeId = (id) => {
    console.log(id);
    // const tasks = JSON.parse(localStorage.getItem("tasks"));
    // const tasksCopy = [...tasks];

    // const newTasks = tasksCopy.filter((item)=> item.id !== id);
    // console.log(newTasks)
    // localStorage.setItem("tasks", JSON.stringify(newTasks))
    axios
      .delete(`${BASE_URL}/tasks/${id}`)
      .then(() => {
        toast.success("Task deleted");
        getTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const removeTaskHandler = (id) => {
  //   removeId(id);
  //   getTasks();
  // };

  return (
    <div className={styles.cover}>
      <div className={styles.card}>
        <div>
          {/* <h1>{truncate(task.title, 20)}</h1> */}
          {/* <p>{truncate(task.desc, 300)}</p> */}
          <h1>{task.title}</h1>
          <p>{task.desc}</p>
          <p>{task.date}</p>
        </div>

        <div className={styles.icons}>
          <div className={styles.subicon}>
            <RiDeleteBinLine onClick={() => removeId(task._id)} />
            <FaEdit />
          </div>
          <div>
            <BsShareFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskcard;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem quo nulla voluptate fugiat possimus ipsa eum sed. Inventore, itaque.
