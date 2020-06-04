import React from "react";
import "./Header.css";

const Header = ({ searchField, searchChange }) => {
  return (
    <div>
      <header className="flex items-center justify-around">
        <h1 className="white">Covid19Info</h1>
        <input
          onChange={searchChange}
          className="w-20 pa2 ba b--green bg-lightest-blue br3"
          type="search"
          placeholder="search states"
        ></input>
      </header>
    </div>
  );
};

export default Header;
