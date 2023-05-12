import React, { createContext, useState } from "react";
import axios from "axios";
export const ContextProvider = createContext();

export const Context = ({ children }) => {
  const [updatedTask, setUpdatedTask] = useState(null);

  const retrieveTask = (id) => {
    axios
      .get(`/tasks/${id}`)
      .then((response) => {
        console.log(response.data, "responseData");
        setUpdatedTask(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const hold = {
    updatedTask,
    retrieveTask,
  };
  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
