export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
};

export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
};

export function forceInteger(value: any): number {
    const val = toInteger(value);
    return isNaN(val) ? 0 : val;
};

export function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return '';
    }
};