/* eslint-disable react/prop-types */
import { useState } from "react";
import { updateTask } from "./apiTasks";
// import { updateTask } from "./apiTasks";

// updateTask
function EditForm({task }) {
  const [taskData, setTaskData] = useState({
    task: "",
    isComplete: false
  })

  const handleToggle = (e) => {
    setTaskData({...taskData, [e.target.name]: e.target.checked})
  }

  const handleChange = (e) =>{
    setTaskData({...taskData,[e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    updateTask(task._id, taskData)
  }

  return (
    <div className="d-flex justify-content-center align-items-center border border-dark rounded">
      <form className="form" onSubmit={handleSubmit}>
        <h5 className="d-flex justify-content-center">Edit Task</h5>
        <div className="form-control d-flex gap-2">
          <label className="form-label" htmlFor="task">
            Task
          </label>
          <input
            type="text"
            name="task"
            className="d-flex justify-content-center"
            defaultValue={task["task"]}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            checked={taskData.isComplete}
            onChange={handleToggle}
          />
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
