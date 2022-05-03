
export const isValidDate = (d: Date) => !Number.isNaN(d.getTime())

export const hasMilliSecnods = (arg: number | string) => {
    if (typeof arg === 'number') {
        return String(arg).length >= 11
    }
    const ms = arg.match(/\.\d\d\d/)
    if (ms == null) return false
    return ms[0] !== '.000'
}

// parse timeZoneOffset from ISO format timesptmp
export const parseTimeZoneOffset = (timeStamp: string) => {
    const tz = timeStamp.match(/[+-]\d\d:\d\d/)
    if (tz == null) return 0

    const ope = tz[0][0]
    const hour = parseInt(tz[0][1]) * 10 + parseInt(tz[0][2])
    if (Number.isNaN(hour)) return 0
    if (ope === '+') {
        return -hour * 60
    } else if (ope === '-') {
        return hour * 60
    }
    return 0
}