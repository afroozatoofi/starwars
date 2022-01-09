import React from "react";

import { TextField } from "@mui/material";
/**
 *
 * we can search with this component
 * by title of the movies
 */
const Search = ({ searchValue, onChangeHandler }) => {
  return (
    <TextField
      // sx={{ backgroundColor: "white" }}
      fullWidth
      id="fullWidth"
      label="Search title ..."
      type="search"
      value={searchValue}
      onChange={(e) => onChangeHandler(e.target.value)}
    />
  );
};

export default Search;
