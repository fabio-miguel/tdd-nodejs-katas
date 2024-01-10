const {romanNumerals} = require("./romanNumeralsKataLetters")


function romanNumeralConverter(number) {
    for (const element of romanNumerals) {
        if (number >= element.value) return element.letter + romanNumeralConverter(number - element.value);
    }
    return "";
}

module.exports = { romanNumeralConverter };



