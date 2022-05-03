import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  footer: {
    color: "ffffff",
    backgroundColor: "#3f51b5",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});

export function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography
        component="footer"
        variant="h6"
        align="center"
        sx={{ color: '#ffffff'}}
      >
        Copyright &copy; 2022 <a href="https://github.com/Nikkely">Nikkely</a>
      </Typography>
    </div>
  );
}
