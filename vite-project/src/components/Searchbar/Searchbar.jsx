import React from "react";

const Searchbar = (setInput) => {
  return (
    <div>
      <header className="searchbar">
        <form className="form">
          <button type="submit" class="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={event => {setInput(event.target.value)}}
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
