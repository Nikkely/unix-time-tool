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

export function createTimer(): TimerObject {
  return {
    hasMilliseconds: false,
    timeStamp: "",
    unixtime: 0,
    locale: "ja-JP",
    timeZone: "Asia/Tokyo",
    isValidTimeStamp: true,
    isValidUnixtime: true,
  };
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

export function updateUnixtime(timer: TimerObject): TimerObject {
  const ret = { ...timer };
  return ret;
}
