import * as React from "react";

import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";

import download_txt from "../utils/downloadText";
import print from "../utils/print";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
];
/**
 *
 * this is an extra option for some oprations
 * it can recive the actions dynamically and show them.
 * in this case , we have copy, save and print
 * also we have some functions for implementing each of them
 * (some of them exist on the utils directory)
 */
export default function ControlledOpenSpeedDial({ contextPreview }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ height: 155, transform: "translateZ(0px)" }}>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                switch (action.name) {
                  case "Copy":
                    navigator.clipboard.writeText(contextPreview);
                    toast.success("Copid to clipboard!");
                    break;
                  case "Save":
                    download_txt(contextPreview);
                    break;
                  case "Print":
                    print();
                    break;
                  default:
                    break;
                }
              }}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}
