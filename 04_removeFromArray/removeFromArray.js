const removeFromArray = function(arr, ...moreArgs) {
  let id;
  for (i=0; i <moreArgs.length; i++) {
      while(arr.includes(moreArgs[i])){
        id = arr.indexOf(moreArgs[i]);
        if (id > -1) {
            arr.splice(id, 1);
      }

    }
  } return arr;
   

 
};

  /*  newArray.splice(newArray.indexOf(moreArgs), 1);
    return newArray;*/
   
   
    /*newArray2 = newArray;
    toRm = moreArgs;
    while (newArray2.indexOf(moreArgs) >= 0){
    newArray2.splice(newArray2.indexOf(moreArgs), 1);
    return newArray;
    }*/

    /*    newArray = [];
    if (newArray.includes(moreArgs)){
        let index = newArray.findIndex(moreArgs);
        newArray.pop(moreArgs);
    }

*/
/*const remov = function(newArray, ...moreArgs){
		newArray2 = newArray;
    if (newArray2.includes(...moreArgs)) {
    	let toRemove;
      toRemove = newArray2.indexOf(...moreArgs);
      //newArray2.splice();
    }



}

remov([1,2,3,4], 3);
console.log(newArray2);
console.log(toRemove);*/



// Do not edit below this line
module.exports = removeFromArray;
