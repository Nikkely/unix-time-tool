import { isValidDate } from "./util";

export interface TimerObject {
  unixtime: number;
  timeStamp: string;
  hasMilliseconds: boolean;
  locale: string;
  timeZone: string;
  isValidUnixtime: boolean;
  isValidTimeStamp: boolean;
}

export function updateTimeStamp(timer: TimerObject): TimerObject {
  const ret = { ...timer };
  const date = new Date(ret.unixtime);
  ret.isValidUnixtime = isValidDate(date);
  if (!ret.isValidUnixtime) return ret;
  ret.timeStamp = date.toLocaleString(ret.locale, {
    timeZone: ret.timeZone,
  });
  return ret;
}

export function isValidTimer(timer: TimerObject): boolean {
  const d = new Date(timer.timeStamp);
  return isValidDate(d);
}
