const sumAll = function(first, second) {
    let total = 0;
    
    if ( (first < 1) || (second < 1) ) return('ERROR');
    
    if ( (Number.isInteger(first) ) && (Number.isInteger(second) ) ) {
        let first1;
        let second2;
        if (second < first){
            first1 = second;
            second2 = first;
            } else{
            first1 = first;
            second2 = second;    
            }
	    for(let i = first1; i <= second2; i++) 
        total += i;
				} else {
					return('ERROR');
        }

    return total; 
};

// Do not edit below this line
module.exports = sumAll;
