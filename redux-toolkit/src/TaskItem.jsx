import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from './features/task/TaskSlice';

function TaskItem({li}) {
  let dispatch = useDispatch()
  return (
    <div className={`task ${li.completed ? "completed" : ""}`}>
      {li.text}
      <button onClick={()=>dispatch(toggleTask(li.id))}>{li.completed ? "undo" : "done"}</button>
      <button onClick={()=>dispatch(deleteTask(li.id))}>delete</button>
    </div>
  );
}

export default TaskItem