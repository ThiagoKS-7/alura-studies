export function timeToSeconds(time: string) {
    const decH = Number(time.split(":")[0][0]) * 10 * 3600;
    const hour = Number(time.split(":")[0][0]) * 3600;
    const decM = Number(time.split(":")[0][0]) * 10 * 60;
    const minute = Number(time.split(":")[0][0]) * 60;
    return [decH,hour,decM, minute]
}