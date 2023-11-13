import React, { useState } from "react";

const SearchBar = ({ onChange }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (val) => {
    setSearchText(val);
    onChange(val);
  };

  const searchBarStyle = {
    width: "40em",
    height: "2em",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "8px",
    background: "white",
    borderTopLeftRadius: "9px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "9px",
    border: "1px #E4E4E4 solid",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    marginTop: "3%",
    marginRight: "10%"
  };

  const textContainerStyle = {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "8px",
    display: "flex"
  };

  return (
    <div style={textContainerStyle}>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        style={searchBarStyle}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
