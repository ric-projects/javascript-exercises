const fibonacci = function(x) {
    x = Number(x);

    if(x == 0) {return 0};

    if(x < 0) {return 'OOPS'};

    let firstRef = 0, secondRef = 1, total;
    
    if((x == 1)) {return secondRef};
    for(let i = 1; i < x; i++){
        total = firstRef + secondRef;
        firstRef = secondRef;
        secondRef = total;
    } return total;
};

// Do not edit below this line
module.exports = fibonacci;
