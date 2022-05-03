import { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {
  TimerObject,
  updateTimeStamp,
  createTimer,
  updateUnixtime,
} from "../domain/timer";
import { hasMilliSecnods } from "../domain/util";
import { UnixTimeDetail } from "./UnixTimeDetail";
import { TimeStampDetail } from "./TimeStampDetail";

export function MainForm(props: any) {
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
              type="number"
              error={!timer.isValidUnixtime}
              value={timer.unixtime}
              onChange={(e) => {
                const ut = parseInt(e.target.value);
                const newTimer = updateTimeStamp({
                  ...timer,
                  unixtime: ut,
                  hasMilliseconds: hasMilliSecnods(ut),
                });

                setTimerObject(() => {
                  return newTimer;
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
                const newTimer = updateUnixtime({
                  ...timer,
                  timeStamp: e.target.value,
                  hasMilliseconds: hasMilliSecnods(e.target.value),
                });
                setTimerObject(() => {
                  return newTimer;
                });
              }}
            />
          </Grid>
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
                setTimerObject(() => {
                  return updateTimeStamp(timer);
                });
              }}
            >
              時刻に変換
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => {
                setTimerObject(() => {
                  return updateUnixtime(timer);
                });
              }}
            >
              UnixTimeに変換
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={2}
      >
        <Grid item xs={4}>
          <UnixTimeDetail
            {...{
              timer: timer,
              toggleMillSconds: () => {
                setTimerObject((prevTimer) => {
                  return {
                    ...prevTimer,
                    hasMilliseconds: !prevTimer.hasMilliseconds,
                  };
                });
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TimeStampDetail
            {...{
              timer: timer,
              updateOffset: (offset) => {
                setTimerObject((prevTimer) => {
                  return {
                    ...updateTimeStamp({
                      ...prevTimer,
                      timeZoneOffset: offset,
                    }),
                  };
                });
              },
              updateDate: (date) => {
                setTimerObject((prevTimer) => {
                  return {
                    ...prevTimer,
                    timeStamp: prevTimer.timeStamp.replace(
                      /\d\d\d\d-\d\d-\d\d/,
                      date
                    ),
                  };
                });
              },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
