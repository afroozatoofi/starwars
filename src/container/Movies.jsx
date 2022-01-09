import React, { Fragment, useState } from "react";

import { useSelector } from "react-redux";

import { Rating } from "@mui/material";

import Grid from "../components/Grid";
import Preview from "../components/Preview";
import Search from "../components/Search";
import Sort from "../components/Sort";
import ProgressBar from "../components/ProgressBar";

import GridUtils from "../utils/GridUtils";

const columns = [
  { field: "episode_str", headerName: "Episode", flex: 0.8, minWidth: 50 },
  { field: "title_mix", headerName: "Title", flex: 1.9, minWidth: 200 },
  {
    field: "release_date",
    headerName: "Release Date",
    flex: 0.9,
    minWidth: 50,
  },
  {
    field: "rate",
    headerName: "Rate",
    flex: 0.9,
    minWidth: 50,
    sortable: false,
    renderCell: (params) => {
      return <Rating name="size-medium" defaultValue={2} />;
    },
  },
];
/**
 *
 * @returns all components which related to movies,
 * it's a container component and contains:
 * <Search />
 * <Sort />
 * <Grid />
 * <Preview />
 */
const Movies = () => {
  const movies = useSelector((state) => state.films);

  const [sortValue, setSortValue] = useState(null);
  const [preview, setPreview] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  let items = GridUtils.getItems(movies, sortValue, searchValue);
  let selected = (selected) => {
    setPreview(selected);
  };

  return (
    <Fragment>
      {movies.length === 0 ? <ProgressBar /> : null}

      <div className="row header">
        <div className="col-lg-2 col-sm-12">
          <Sort onChangeHandler={setSortValue} />
        </div>
        <div className="col-lg-10 col-sm-12">
          <Search onChangeHandler={setSearchValue} searchValue={searchValue} />
        </div>
      </div>
      <div className="row main">
        <div className="col-lg-6 col-md-12">
          <Grid items={items} selectedItem={selected} columns={columns} />
        </div>
        <div className="col-lg-6 col-md-12">
          {preview ? (
            <Preview data={movies.find((m) => m.episode_id === preview)} />
          ) : (
            <h6 className="no-preview">No movie selected</h6>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Movies;
