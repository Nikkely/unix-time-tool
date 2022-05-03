import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export function Header() {
  return (
    <AppBar position="static" variant="outlined">
      <Toolbar>
        <Typography variant="h6" component="h1">UnixTime変換</Typography>
      </Toolbar>
    </AppBar>
  );
}
