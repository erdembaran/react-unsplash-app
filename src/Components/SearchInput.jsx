import { useState } from "react";

function SearchInput({ searchValue }) {
  const [valueInput, setvalueInput] = useState("");

  const handleChange = (event) => {
    setvalueInput(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    searchValue(valueInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchValue(valueInput);
    }
  };

  return (
    <div className="container">
      <h2 className="d-flex justify-content-center mt-4 fw-bold ">
        What are you looking for?
      </h2>
      <div className="container d-flex justify-content-center mt-4">
        <input
          className="rounded-2"
          type="text"
          value={valueInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        ></input>
        <button className="btn btn-success ms-4" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
