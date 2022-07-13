export function relative (current: Date, other: Date, shortened: boolean, smarter: boolean): string {
    const diff = other.getTime() - current.getTime();
    const formatter = new Intl.RelativeTimeFormat("en", {
        style: shortened ? "short" : "long", numeric: smarter ? "auto" : "always"
    });
    const units = [1000, 60, 60, 24, 7];
    const names = ["second", "minute", "hour", "day", "week"];
    let values: number[] = [];
    for (let i = 0; i < units.length; i++) {
        values.push((i == 0 ? diff : values[i-1]) / units[i]);
    }
    for (let i = units.length-1; i >= 0; i--) {
        if (Math.abs(values[i]) >= 1) {
            return formatter.format(Math.round(values[i]), names[i] as Intl.RelativeTimeFormatUnit);
        }
    }
    return " ";
}
