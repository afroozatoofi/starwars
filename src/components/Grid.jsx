import React from "react";

import { DataGrid } from "@mui/x-data-grid";

/**
 * It's a dynamic grid and can show any data comes from items
 * @param {items, selectedItem, columns} param0
 * @returns gridview html as a table
 */
function Grid({ items, selectedItem, columns }) {
  return (
    <DataGrid
      sx={{ border: 0 }}
      autoHeight
      columns={columns}
      onRowClick={(e) => {
        selectedItem(e.id);
      }}
      getRowId={(row) => row.episode_id}
      rows={items}
      pagination
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  );
}

export default Grid;
