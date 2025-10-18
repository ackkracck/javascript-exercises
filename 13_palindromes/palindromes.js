const palindromes = function (input) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    let array = Array.from(input.toLowerCase());

    let filtered_array = array.filter(element => letters.includes(element));

    let reversed_array = [];

    for (let i = filtered_array.length - 1; i >= 0; i--) {
        reversed_array.push(filtered_array[i]);
    }

    return reversed_array.join('') === filtered_array.join('');
};


// Do not edit below this line
module.exports = palindromes;
