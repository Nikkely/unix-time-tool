import { createTimer, updateTimeStamp } from "../domain/timer";

describe("test updateTimer", () => {
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
