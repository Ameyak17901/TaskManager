import SearchBar from "./SearchBar";
import { useState } from "react";
import TasksTable from "./Tasks";
// import AddForm from "./AddForm";

function AppLayout() {
  const [searchText, setSearchText] = useState("");
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column align-items-center">
        <SearchBar onSubmit={setSearchText} />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center py-5 px-5">
        <TasksTable searchText={searchText}/>
      </div>
      {/* {isOpen && <AddForm/>} */}
    </div>
  );
}

export default AppLayout;
