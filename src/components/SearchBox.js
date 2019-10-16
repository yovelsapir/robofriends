import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  console.log("SearchBox");
  return (
    <div>
      <input
        className="pa3 ba bg--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
