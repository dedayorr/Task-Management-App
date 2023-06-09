import React from "react";
import "./AddTask.css";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../config";

export const AddTask = ({ func, setOpenCreateTask }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
  });

  const { title, desc, date } = state;
  console.log(state);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  async function submitHandler(e) {
    if (!title || !desc || !date) {
      toast.warning("All fields are required");
      return;
    }
    setLoading(true);
    const data = { title, desc, date };
    // const tasks = localStorage.getItem("tasks")
    //   ? JSON.parse(localStorage.getItem("tasks"))
    //   : [];
    // const taskcopy = [...tasks, data];
    // localStorage.setItem("tasks", JSON.stringify(taskcopy));
    axios
      .post(`${BASE_URL}/create`, data)
      .then(() => {
        setLoading(false);
        toast.success("Task created");
        setOpenCreateTask(false);
      })
      .catch((error) => {
        console.log(error);
      });

    setState({ title: "", desc: "", date: "" });
  }

  return (
    <>
      <div>
        <form className="theForm">
          <div onClick={() => setOpenCreateTask(false)} className="icon">
            <AiFillCloseCircle />
          </div>
          <div className="addTask">Add Tasks</div>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={changeHandler}
          />
          <textarea
            value={desc}
            name="desc"
            onChange={changeHandler}
            rows="10"
            cols="50"
          >
            {" "}
            Description{" "}
          </textarea>
          <input
            type="date"
            name="date"
            value={date}
            onChange={changeHandler}
          />
        </form>
        {loading ? (
          <Spinner />
        ) : (
          <button onClick={submitHandler} className="btn-three">
            Add Task
          </button>
        )}
      </div>
    </>
  );
};
