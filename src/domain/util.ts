
export const isValidDate = (d: Date) => !Number.isNaN(d.getTime())

export const hasMilliSecnods = (unixtime: number) => String(unixtime).length >= 11