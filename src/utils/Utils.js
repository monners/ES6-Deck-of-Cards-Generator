export function arrayFromRange(from, to) {
    return Array.from(new Array(to - from + 1)).map((x, i) => i + from);
}
