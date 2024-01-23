// src/components/Board.js
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";

const Board = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    // ... (unchanged)
  };

  const moveTask = (taskId) => {
    const currentColumnId = Object.keys(data.columns).find(
      (columnId) => data.columns[columnId].taskIds.indexOf(taskId) !== -1
    );

    const currentColumn = data.columns[currentColumnId];
    const currentTaskIndex = currentColumn.taskIds.indexOf(taskId);

    const nextColumnId =
      data.columnOrder[data.columnOrder.indexOf(currentColumnId) + 1];

    if (nextColumnId) {
      const nextColumn = data.columns[nextColumnId];

      const newCurrentTaskIds = Array.from(currentColumn.taskIds);
      newCurrentTaskIds.splice(currentTaskIndex, 1);

      const newNextTaskIds = Array.from(nextColumn.taskIds);
      newNextTaskIds.push(taskId);

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [currentColumnId]: { ...currentColumn, taskIds: newCurrentTaskIds },
          [nextColumnId]: { ...nextColumn, taskIds: newNextTaskIds },
        },
      };

      setData(newData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              moveTask={moveTask}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
