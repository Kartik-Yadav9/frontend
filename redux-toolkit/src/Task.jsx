import { useState } from "react";
import "./App.css";
import { addtask } from "./features/task/TaskSlice";
import { useDispatch } from "react-redux";
import TaskList from "./TaskList";

function Task() {
  const [todo, setTodo] = useState("");

  let dispatch = useDispatch();

  let handleAdd = (e) => {
    e.preventDefault();
    dispatch(addtask(todo));
    setTodo("");
  };
  return (
    <div className="container">
      <p className="heading">Task Manager (redux-toolkit)</p>
      <form onSubmit={handleAdd}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="write a task"
        />
        <button type="submit">add</button>
      </form>
      <TaskList />
    </div>
  );
}

export default Task;
