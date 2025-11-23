function isFibonacci(num) {
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
        return false;
    }

    if (num === 0 || num === 1) return true;

    let a = 0, b = 1;
    while (b < num) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b === num;
}

const input = parseInt(prompt("Enter a non-negative integer:"));
alert(isFibonacci(input));
