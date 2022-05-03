import { useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { TimerObject } from "../domain/timer";

interface TimeStampDetailProps {
  timer: TimerObject;
  updateOffset: (offset: number) => void;
  updateDate: (date: string) => void; // format: yyyy-MM-dd
}

export function TimeStampDetail(props: TimeStampDetailProps) {
  const [date, setDate] = useState<Date | null>(new Date());
  const changeDateHandler = (newDate: Date | null): void => {
    setDate(newDate);
    if (newDate === null) return;
    props.updateDate(format(newDate, "yyyy-MM-dd"));
  };

  const ope = props.timer.timeZoneOffset <= 0 ? "+" : "-";
  const utc =
    props.timer.timeZoneOffset === 0
      ? "UTC"
      : `UTC${ope}${Math.abs(props.timer.timeZoneOffset / 60)}`;
  return (
    <Paper sx={{ my: { md: 2 }, p: { xs: 1 } }}>
      <Typography component="h3" variant="h6" align="center">
        時刻詳細
      </Typography>
      <Container sx={{ mt: 2 }}>
        <Typography component="span">タイムゾーン 現在:{utc}</Typography>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          size="small"
          fullWidth
        >
          <Button
            onClick={() => {
              props.updateOffset(0);
            }}
          >
            UTC
          </Button>
          <Button
            onClick={() => {
              props.updateOffset(-540);
            }}
          >
            UTC+9(日本時間)
          </Button>
        </ButtonGroup>
      </Container>
      <Container sx={{ mt: 3 }}>
        <Typography component="span">日付入力補助</Typography>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={date} onChange={changeDateHandler} />
          </MuiPickersUtilsProvider>
        </div>
      </Container>
    </Paper>
  );
}
