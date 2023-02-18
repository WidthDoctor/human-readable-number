module.exports = function toReadable(num) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const mediumNumbers = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decades = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (num === 0) {
        return "zero";
    } else if (num < 10) {
        number = num.toString().split("");
        return units[number[0]];
    } else if (num >= 10 && num < 20) {
        number = num.toString().split("");
        return mediumNumbers[number[1]];
    } else if (num >= 20 && num < 100) {
        number = num.toString().split("");
        if (number[1] === "0") {
            return decades[number[0] - 2];
        } else if (number[1] !== 0) {
            return decades[number[0] - 2] + " " + units[number[1]];
        }
    } else if (
        (num >= 100 && num < 110) ||
        (num >= 200 && num < 210) ||
        (num >= 300 && num < 310) ||
        (num >= 400 && num < 410) ||
        (num >= 500 && num < 510) ||
        (num >= 600 && num < 610) ||
        (num >= 700 && num < 710) ||
        (num >= 800 && num < 810) ||
        (num >= 900 && num < 910)
    ) {
        number = num.toString().split("");
        if (number[1] === "0" && number[2] !== "0") {
            return units[number[0]] + " hundred " + units[number[2]];
        }
        if (number[1] === "0" && number[2] === "0") {
            return units[number[0]] + " hundred";
        }
    } else if (
        (num >= 110 && num < 120) ||
        (num >= 210 && num < 220) ||
        (num >= 310 && num < 320) ||
        (num >= 410 && num < 420) ||
        (num >= 510 && num < 520) ||
        (num >= 610 && num < 620) ||
        (num >= 710 && num < 720) ||
        (num >= 810 && num < 820) ||
        (num >= 910 && num < 920)
    ) {
        number = num.toString().split("");
        return units[number[0]] + " hundred " + mediumNumbers[number[2]];
    } else if (num >= 120 && num < 1000) {
        number = num.toString().split("");
        if (number[1] !== "0" && number[2] === "0") {
            return units[number[0]] + " hundred " + decades[number[1] - 2];
        } else if (number[1] !== "0" && number[2] !== "0")
            return (
                units[number[0]] +
                " hundred " +
                decades[number[1] - 2] +
                " " +
                units[number[2]]
            );
    }
};
