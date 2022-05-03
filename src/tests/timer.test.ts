import { createTimer, updateTimeStamp, updateUnixtime} from "../domain/timer";
import {hasMilliSecnods} from '../domain/util'

describe("test updateTimeStamp", () => {
  it("normal", () => {
    const timer = createTimer();
    timer.unixtime = 1260747090
    const newTimer = updateTimeStamp(timer)
    expect(newTimer.isValidUnixtime).toBeTruthy()
    expect(newTimer.timeStamp).toBe("2009-12-14T08:31:30.000+09:00");
  });

  it("invalid", () => {
    const timer = createTimer();
    timer.unixtime = 111111111111111111111111111;
    expect(updateTimeStamp(timer).isValidUnixtime).toBeFalsy();
  });

  it("with milliseconds", () => {
    const timer = createTimer();
    timer.unixtime = 1260747090123
    timer.hasMilliseconds = hasMilliSecnods(timer.unixtime)
    const newTimer = updateTimeStamp(timer)
    expect(newTimer.isValidUnixtime).toBeTruthy()
    expect(newTimer.timeStamp).toBe("2009-12-14T08:31:30.123+09:00");
  });
});

describe("test updateUnixtime", () => {
  it("normal", () => {
    const timer = createTimer();
    timer.timeStamp = "2009-12-14T08:31:30.000+09:00"

    const newTimer = updateUnixtime(timer)
    expect(newTimer.isValidTimeStamp).toBeTruthy();
    expect(newTimer.unixtime).toEqual(1260747090)
  });

  it("invalid", () => {
    const timer = createTimer();
    timer.timeStamp = "invalid"
    expect(updateUnixtime(timer).isValidTimeStamp).toBeFalsy();
  });

  it("with millseconds", () => {
    const timer = createTimer();
    timer.timeStamp = "2009-12-14T08:31:30.123+09:00"
    timer.hasMilliseconds = true

    const newTimer = updateUnixtime(timer)
    expect(newTimer.isValidTimeStamp).toBeTruthy();
    expect(newTimer.unixtime).toEqual(1260747090123)
  });
});
