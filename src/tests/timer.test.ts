import { TimerObject, newTimer, isValidTimer } from "../domain/timer";

test("test isValidTimer", () => {
    const timer = newTimer()
    timer.timeStamp= "hogehogehoge"
    expect(isValidTimer(timer)).toBeFalsy()
});
