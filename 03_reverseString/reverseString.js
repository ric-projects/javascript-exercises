const reverseString = function(word) {
    word = Array.from(word);
    const revWord = [];
    word.flatMap((x) => revWord.unshift(x));
    let newWord = revWord.join('');
    return newWord;
    




};

// Do not edit below this line
module.exports = reverseString;
