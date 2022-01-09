import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ imgName, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, height: 270, marginBottom: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={"/assets/movies/" + imgName + ".jpg"}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.substr(0, 100)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
