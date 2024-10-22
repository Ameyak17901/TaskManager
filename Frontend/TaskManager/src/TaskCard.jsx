/* eslint-disable react/prop-types */
import { useState } from "react";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";
import { deleteTask } from "./apiTasks";

function TaskCard({ task }) {
  const [FormOpen, setFormOpen] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  const handleDelete = async (e, id) => {
    console.log(e);
    await deleteTask(id);
  };
  console.log(handleDelete);
  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex flex-column p-2 border border-dark rounded">
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={(e) => handleDelete(e, task["_id"])}
          >
            Delete
          </button>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-warning btn-sm" onClick={() => setIsOpen((v) => !v)}>Edit</button>
        </div>
        <h5 onClick={() => setFormOpen((v) => !v)}>{task["task"]}</h5>
        {FormOpen ? (
          <div>{task["isComplete"] ? "Completed" : "Incomplete"}</div>
        ) : (
          ""
        )}
      </div>
      {IsOpen && <EditForm task={task} />}
    </div>
  );
}

export default TaskCard;
