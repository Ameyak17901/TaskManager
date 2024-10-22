import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AppLayout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
