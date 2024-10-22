/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchTasks } from "./apiTasks";
import TaskCard from "./TaskCard";
import AddForm from "./AddForm";

function Tasks({ searchText }) {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setisOpen] = useState(false);
  useEffect(() => {
    async function getTasks() {
      const data = await fetchTasks();
      setTasks([...data["tasks"]]);
    }
    getTasks();
  }, [searchText]);

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-row gap-3">
          {tasks.map((task, i) => (
            <TaskCard key={i} task={task}>
              {task["task"]}
            </TaskCard>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setisOpen((v) => !v)}
        >
          Add
        </button>
      </div>
      {isOpen && <AddForm />}
    </>
  );
}

export default Tasks;
