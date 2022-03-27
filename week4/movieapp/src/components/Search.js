import React from "react";
import ButtonGroup from "./ButtonGroup";
////search section (navbar)
const Search = ({
  handleInputChange,
  handleSearchButton,
  printButtonLabel,
}) => {
  return (
    <div className="container search-container ">
      <ButtonGroup
        buttons={["All", "Movies", "Series"]}
        doSomethingAfterClick={printButtonLabel}
      />
      <div id="searchContainer" className="col-sm-12 col-md-3">
        <input
          type="text"
          onChange={(x) => handleInputChange(x.target.value)}
          placeholder="search for movies"
        />
        <button id="searchButton" onClick={() => handleSearchButton()}>
          {" "}
          search
        </button>
      </div>
    </div>
  );
};
export default Search;