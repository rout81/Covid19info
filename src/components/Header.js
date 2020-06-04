import React from "react";

const Header = ({ searchField, searchChange }) => {
  return (
    <div>
      <header id="responsive" className="flex items-center justify-around">
        <h1 id="logo" className="white">Covid19Info</h1>
        <input id="search"
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
