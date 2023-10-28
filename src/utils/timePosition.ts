type TimeFormat = `${0|1|2}${number}:${number}${number}`|string
export const timePosition = (time:TimeFormat) => Number(time.split("").filter(el=>el!==":").join(""))