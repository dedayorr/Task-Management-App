import React, { useEffect } from "react";
import { AddTask } from "../components/AddTask/AddTask";
import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import "./Task.css";
import Tasklist from "../components/Tasklist/Tasklist";
import { UpdateTask } from "../components/UpdateTask/UpdateTask";
import axios from "axios";
import { BASE_URL } from "../config";

export const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [openCreateTask]);

  console.log(BASE_URL, "BASE_URL");
  function getTasks() {
    axios
      .get(`${BASE_URL}/tasks`)
      .then((response) => {
        console.log(response.data, "responseData");
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <button onClick={() => setOpenCreateTask(true)} className="btn-four">
        New Task
      </button>

      {/* create task */}
      {openCreateTask && (
        <Modal>
          <AddTask setOpenCreateTask={setOpenCreateTask} />
        </Modal>
      )}

      {/* update task */}
      {openUpdateTask && (
        <Modal>
          <UpdateTask setOpenUpdateTask={setOpenUpdateTask}/>
        </Modal>
      )}

      <Tasklist tasks={tasks ? tasks : []} getTasks={getTasks} setOpenUpdateTask={setOpenUpdateTask} />
    </div>
  );
};
