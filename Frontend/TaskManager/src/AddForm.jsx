import { useState } from "react";
import { createTask } from "./apiTasks";

function AddForm() {
  const [task, setTask] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const handleChange = (event) => {
    setTask(event.target.value)
  }
  const handleToggle = (event) =>{
    setIsComplete(event.target.checked)
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    await createTask({task, isComplete})
  }

  return (
    <div className="d-flex flex-column" onSubmit={handleSubmit}>
      <form className="form d-flex flex-column">
        <div className="form-control d-flex flex-row gap-4">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
          />
        </div>
        <div className="form-control d-flex flex-row gap-4">
          <label htmlFor="isComplete">Status</label>
          <input
            type="checkbox"
            checked={isComplete}
            onChange={handleToggle}
          />
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-success"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
