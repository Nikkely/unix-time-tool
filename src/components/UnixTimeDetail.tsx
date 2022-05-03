import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import { TimerObject } from "../domain/timer";

interface UnixTimeDetailProps {
  timer: TimerObject;
  toggleMillSconds: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UnixTimeDetail(props: UnixTimeDetailProps) {
  return (
    <Paper sx={{ my: { md: 2 }, p: { xs: 1 } }}>
      <Typography component="h3" variant="h6" align="center">
        UnixTime詳細
      </Typography>
      <FormGroup sx={{ margin: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.timer.hasMilliseconds}
              onChange={props.toggleMillSconds}
            />
          }
          label="ミリ秒を含む"
        />
      </FormGroup>
    </Paper>
  );
}
