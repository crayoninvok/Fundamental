let num11 = 42;
let num22 = 27;
let num33 = 18;

let small: number;
let midd: number;
let large: number;

if (num11 <= num22 && num11 <= num33) {
    small = num11;
    if (num22 <= num33) {
        midd = num22;
        large = num33;
    } else {
        midd = num33;
        large = num22;
    }
} else if (num22 <= num11 && num22 <= num33) {
    small = num22;
    if (num11 <= num33) {
        midd = num11;
        large = num33;
    } else {
        midd = num33;
        large = num11;
    }
} else {
    small= num33;
    if (num11 <= num22) {
        midd = num11;
        large = num22;
    } else {
        midd = num22;
        large = num11;
    }
}

console.log(`${small}, ${midd}, ${large}`);
