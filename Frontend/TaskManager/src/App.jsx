import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TasksTable from "./TasksTable";
import Home from "./Home";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/tasks" Component={AppLayout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
