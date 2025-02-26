const leapYears = function(year) {
    let result;
    if ( ( year % 100 == Number.isInteger() ) && (year % 400 == Number.isInteger() ) ) {
        result = true;
    } else if ( ( year % 100 == Number.isInteger() )) {
        result = false;
    } else if ( year % 4 == Number.isInteger() ){
        result = true;
    } else {
        result = false;
    }




    /*if ( ( year % 100 == Number.isInteger() ) && (year % 400 == Number.isInteger() ) ) {
        result = true;        
    } else {
        if ( year % 4 == Number.isInteger() ){
            result = true;
        } else {
            result = false;
        };
        
    }*/
    return result;
};

// Do not edit below this line
module.exports = leapYears;
