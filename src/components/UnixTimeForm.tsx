import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import DateFnsUtils from "@date-io/date-fns";
import { format, compareAsc } from "date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

interface TimerObject {
  unixtime: number;
  timestamp: string;
  hasMilliseconds: boolean;
  locale: string;
  timeZone: string;
}

const updateTimeStamp = (timer: TimerObject) => {
  const date = new Date(timer.unixtime);
  timer.timestamp = date.toLocaleString(timer.locale, {
    timeZone: timer.timeZone,
  });
};

export function UnixTimeForm(props: any) {
  const classes = useStyles();
  const [date, setDate] = useState<Date | null>(new Date());
  const changeDateHandler = (newDate: Date | null): void => {
    setDate(newDate);
  };

  // stateを作成
  const [timer, setTimerObject] = useState<TimerObject>({
    hasMilliseconds: false,
    timestamp: "",
    unixtime: 0,
    locale: "ja-JP",
    timeZone: "Asia/Tokyo",
  });

  return (
    <Container component="main" maxWidth="lg" sx={{ mb: 8 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h2" variant="h5" align="center">
          UnixTime相互変換
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className={classes.grid} xs={4}>
            <TextField
              id="unixtime-form"
              label="UnixTime"
              fullWidth
              onChange={(e) => {
                timer.unixtime = parseInt(e.target.value);
                updateTimeStamp(timer);
                setTimerObject(() => {
                  return { ...timer };
                });
              }}
            />
          </Grid>
          <Grid item className={classes.grid} xs={4}>
            <TextField
              id="time-form"
              label="時刻"
              fullWidth
              variant="standard"
              value={timer.timestamp}
              onChange={(e) => {
                setTimerObject((prevState) => {
                  return { ...prevState, timestamp: e.target.value };
                });
              }}
            />
          </Grid>
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={date} onChange={changeDateHandler} />
          </MuiPickersUtilsProvider> */}
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item className={classes.grid} xs={4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setTimerObject(timer);
              }}
            >
              UnixTimeを変換
            </Button>
          </Grid>
          <Grid item className={classes.grid} xs={4}>
            <Button variant="outlined" fullWidth>
              UnixTimeに変換
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "auto",
  },
}));
