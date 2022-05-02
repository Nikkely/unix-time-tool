import { createTimer, updateTimeStamp, updateUnixtime} from "../domain/timer";

describe("test updateTimeStamp", () => {
  it("normal", () => {
    const timer = createTimer();
    timer.unixtime = 12345678910;
    expect(updateTimeStamp(timer).isValidTimeStamp).toBeTruthy();
  });

  it("invalid", () => {
    const timer = createTimer();
    timer.unixtime = 111111111111111111111111111;
    expect(updateTimeStamp(timer).isValidUnixtime).toBeFalsy();
  });
});

describe("test updateUnixtime", () => {
  it("normal", () => {
    const timer = createTimer();
    timer.timeStamp = "2009/12/14 08:31:30"

    const newTimer = updateUnixtime(timer)
    expect(newTimer.isValidUnixtime).toBeTruthy();
    expect(newTimer.unixtime).toEqual(1234567890)
  });

  it("invalid", () => {
    const timer = createTimer();
    timer.timeStamp = "invalid"
    expect(updateUnixtime(timer).isValidUnixtime).toBeFalsy();
  });
});
