/* eslint-disable react/prop-types */
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  function handleClick() {
    onSubmit(input);
    setInput("");
  }

  return (
    <div
      className="row gx-5 w-100 text-bg-primary p-2 border-bottom rounded-bottom border-primary"
    >
      <div className="d-flex col gap-2 align-items-center justify-content-center">
        <input
          type="text"
          value={input}
          className="form-control border-primary w-25"
          placeholder="Enter the Id.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-success" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
