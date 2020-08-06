import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term);
    // Call parents callback
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search videos from YouTube</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
