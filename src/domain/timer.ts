import { isValidDate } from "./util";

export interface TimerObject {
  unixtime: number;
  timeStamp: string; // ISO format
  hasMilliseconds: boolean;
  timeZoneOffset: number; // minutes
  isValidUnixtime: boolean;
  isValidTimeStamp: boolean;
}

export function createTimer(): TimerObject {
  return updateTimeStamp({
    hasMilliseconds: false,
    timeStamp: "",
    unixtime: Math.floor(Date.now()/1000),
    timeZoneOffset: -540,
    isValidTimeStamp: true,
    isValidUnixtime: true,
  });
}

export function updateTimeStamp(timer: TimerObject): TimerObject {
  const ret = { ...timer };
  const a = timer.hasMilliseconds ? 1 : 1000
  const date = new Date(ret.unixtime * a - ret.timeZoneOffset * 60 * 1000);
  ret.isValidUnixtime = isValidDate(date);
  if (!ret.isValidUnixtime) return ret;

  const ope = ret.timeZoneOffset <= 0 ? "+" : "-";
  ret.timeStamp = date
    .toISOString()
    .replace(
      "Z",
      ope + String(Math.abs(ret.timeZoneOffset / 60)).padStart(2, "0") + ":00"
    );
  ret.isValidTimeStamp = true
  return ret;
}

export function updateUnixtime(timer: TimerObject): TimerObject {
  const ret = { ...timer };
  const date = new Date(timer.timeStamp);
  ret.isValidTimeStamp = isValidDate(date);
  if (!ret.isValidTimeStamp) return ret;

  const a = ret.hasMilliseconds ? 1 : 1000
  ret.unixtime = Math.floor(date.getTime() / a);
  ret.isValidUnixtime = true
  return ret;
}
