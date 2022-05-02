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
import { TimerObject, updateTimeStamp, createTimer } from "../domain/timer";

export function UnixTimeForm(props: any) {
  const [date, setDate] = useState<Date | null>(new Date());
  const changeDateHandler = (newDate: Date | null): void => {
    setDate(newDate);
  };

  // stateを作成
  const [timer, setTimerObject] = useState<TimerObject>(createTimer());

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
          <Grid item xs={4}>
            <TextField
              id="unixtime-form"
              label="UnixTime"
              variant="standard"
              margin="normal"
              fullWidth
              error={!timer.isValidUnixtime}
              onChange={(e) => {
                const newTimer = updateTimeStamp({
                  ...timer,
                  unixtime: parseInt(e.target.value),
                });

                setTimerObject(() => {
                  return { ...newTimer };
                });
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="time-form"
              label="時刻"
              fullWidth
              variant="standard"
              error={!timer.isValidTimeStamp}
              value={timer.timeStamp}
              onChange={(e) => {
                setTimerObject((prevState) => {
                  return { ...prevState, timeStamp: e.target.value, isValidTimeStamp: true };
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
          <Grid item xs={4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                const newTimer = updateTimeStamp(timer);
                setTimerObject(() => {
                  return { ...newTimer };
                });
              }}
            >
              UnixTimeを変換
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" fullWidth>
              UnixTimeに変換
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
