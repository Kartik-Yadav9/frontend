import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  let { items, filters } = useSelector((state) => state.tasks);
  const filtered= filters === "completed" ? items.filter(item=> item.completed) : items

  return (
    <div>
      <ul className="ul">
        {/* {items.map((li) => { */}
        {filtered.map((li) => {
          return <TaskItem key={li.id} li={li} />;
        })}
      </ul>
    </div>
  );
}

export default TaskList;
