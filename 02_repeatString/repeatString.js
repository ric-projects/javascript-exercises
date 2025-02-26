
const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let newString = '';
    if (num > 0){
            while (num > 0){
                newString += string;
                num --;
            }
        }   return newString;
    }

/*    let newString = '';
    for (let i = num; i >= 0; i--){
        newString += string;
        return newString;
    }*/

/*    while (num > 0){
        newString += string;
        num--;*/

//    let newString = string.repeat(num);
//    return newString;

// Do not edit below this line
module.exports = repeatString;
