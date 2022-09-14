export function timeToSeconds(time: any) {
    if (time.length === 5) {
        const decH = Number(time.split(":")[0][0]) * 10 * 3600;
        const hour = Number(time.split(":")[0][1]) * 3600;
        const decM = Number(time.split(":")[1][0]) * 10 * 60;
        const minute = Number(time.split(":")[1][1]) * 60;
        const result = decH + hour + decM + minute;
        console.log("result: ", result);
        return result;
    } else {
        const decH = 0;
        const hour = Number(time.split(":")[0]) * 3600;
        const decM = Number(time.split(":")[1][0]) * 10 * 60;
        const minute = Number(time.split(":")[1][1]) * 60;
        const result = decH + hour + decM + minute;
        console.log("result: ", result);
        return result;
    }
}