import React, { Fragment } from "react";

import ControlledOpenSpeedDial from "./SpeedDial";

import Storage from "../utils/storage";

/**
 *
 * preview the detail of a chosen film in the grid
 */
const Preview = ({ data }) => {
  if (!data) return null;
  return (
    <Fragment>
      <div
        style={
          Storage.getItem("mode") === "dark"
            ? { backgroundColor: "#121212" }
            : { backgroundColor: "white" }
        }
      >
        <div className="preview" id="previewId">
          <h1>{data.title_num + data.title}</h1>
          <p>{data.opening_crawl}</p>

          <h6 id="director">Directed by : {data.director}</h6>
        </div>

        <ControlledOpenSpeedDial contextPreview={data.opening_crawl} />
      </div>
    </Fragment>
  );
};

export default Preview;
