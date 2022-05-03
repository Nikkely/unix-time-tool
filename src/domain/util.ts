
export const isValidDate = (d: Date) => !Number.isNaN(d.getTime())

export const hasMilliSecnods = (arg: number | string) => {
    if (typeof arg === 'number') {
        return String(arg).length >= 11
    }
    const ms = arg.match(/.\d\d\d/)
    if (ms == null) return false
    return ms[0] !== '000'
}