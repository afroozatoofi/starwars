import React, { useState } from "react";

import { toast } from "react-toastify";

import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

/**
 *
 * this components shows the lists of certain feilds,
 * we can select one of those feild and see the sorted gridview
 * in addition we have another option for changing the
 * way of sorting (ascending or descending).
 */
const Sort = ({ onChangeHandler }) => {
  const [val, setVal] = useState("");
  const [order, setOrder] = useState("desc");

  const changeOrder = (value, direction) => {
    setVal(value);
    onChangeHandler({
      key: value,
      direction: direction,
    });
  };
  return (
    <div className="row">
      <div className="col-11" style={{ paddingRight: 0 }}>
        <FormControl sx={{ width: "100%", margin: 0 }}>
          <InputLabel id="demo-controlled-open-select-label">
            Sort By...
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            label="Sort By... "
            value={val}
            onChange={(e) => {
              if (!e.target.value) {
                changeOrder("", null);
              } else {
                changeOrder(e.target.value, order);
              }
            }}
          >
            <MenuItem value={""}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={"title"}>title</MenuItem>
            <MenuItem value={"release_date"}>release date</MenuItem>
            <MenuItem value={"episode_id"}>episode</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div
        className="col-1"
        style={{ paddingTop: 8, paddingLeft: 0, paddingRight: 0 }}
      >
        <IconButton
          color="inherit"
          onClick={() => {
            if (!val) {
              toast.error("First choose sort by...", {});
              return;
            }
            let newOrder = order === "desc" ? "asc" : "desc";
            setOrder(newOrder);
            changeOrder(val, newOrder);
          }}
        >
          <SwapVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sort;
