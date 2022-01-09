/**
 * function for convert decimal numbers to Roman numbers
 */

function convertToRoman(num) {
    var arrConv = {
            0: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' },
            1: { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
            2: { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
            3: { 1: 'M', 2: 'MM', 3: 'MMM', 4: 'MMMM', 5: 'MMMMM', 6: 'MMMMMM', 7: 'MMMMMMM', 8: 'MMMMMMMM', 9: 'MMMMMMMMM' }
        },
        arr = num.toString().split("").reverse(),
        romansArray = arr.map(function (a, i) {
            return arrConv[i][a] || '';
        });

    return romansArray.reverse().join("");
}
export default convertToRoman;




