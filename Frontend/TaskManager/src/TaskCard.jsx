/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";
import { deleteTask } from "./apiTasks";

function TaskCard({ task }) {
  const [FormOpen, setFormOpen] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  const handleDelete = async (id) => {
    console.log("clicked");
    await deleteTask(id);
    // const data = await res.json()
    console.log(id);
  };

  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex flex-column p-2 border border-dark rounded">
        <div className="d-flex justify-content-end">
          <MdOutlineDeleteOutline onClick={() => handleDelete(task["_id"])} />
        </div>
        <div>
          <MdEdit onClick={() => setIsOpen((v) => !v)} />
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
