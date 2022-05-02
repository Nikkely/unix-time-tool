import { TimerObject, createTimer, isValidTimer } from "../domain/timer";

test("test isValidTimer", () => {
    const timer = createTimer()
    timer.timeStamp= "hogehogehoge"
    expect(isValidTimer(timer)).toBeFalsy()
});
