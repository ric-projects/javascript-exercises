const palindromes = function (string) {
    let cleanStr = string.toLowerCase();
    cleanStr = cleanStr.replace(/[^a-z0-9]/g, '');
    let splitStr = cleanStr.split('');
    let revStr = splitStr.reverse();
    let joinedStr = revStr.join('');
    return (joinedStr === cleanStr);
};

// Do not edit below this line
module.exports = palindromes;
