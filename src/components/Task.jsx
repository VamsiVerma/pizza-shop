// src/components/Task.js
import React from "react";

const Task = ({ task, index, moveTask }) => {
  const handleNextClick = () => {
    moveTask(task.id);
  };

  return (
    <div className="task" draggable={true} key={task.id} index={index}>
      {task.content}
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Task;
