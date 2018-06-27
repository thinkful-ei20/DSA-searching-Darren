// Max profit
// The share price for a company over a week's trading 
// is as follows: [128, 97, 121, 123, 98, 97, 105]. If you 
// had to buy shares in the company on one day, and sell the 
// shares on one of the following days, write an algorithm
//  to work out what the maximum profit you could make would be.

// set up counter for greatestDifference
// loop through
// currentDayValue = arr[i] 
// nexted loop
// arr[j+1] - currentDayValue

function whenToBuy(array){
  let biggestDifference = 0;
  for (let i = 0; i < array.length; i++) {
    let currentDayValue = array[i];
    for (let j = 0; j < array.length; j++) {
      if (array[j+1] - currentDayValue > biggestDifference){
        biggestDifference = array[j+1] - currentDayValue
      }
    }    
  }
  return biggestDifference;
}
//this is O(n^2) I found the next answer in a medium article....

//   [128, 97, 121, 123, 98, 97, 105]
// 


function getMaxProfit(arr) {
	var minIdx = 0;
    var maxIdx = 1;
    var currMin = 0;
    var maxProfit = 0;

    if(arr.length < 2) {
        throw new Error("Need atleast two time periods to be profitable!");
    }    
    for(var i = 1; i < arr.length; i++) {
        // new current min.
        if(arr[i] < arr[currMin]) { 
        	currMin = i;
        }        
        // new best profit
        if(arr[maxIdx] - arr[minIdx] < arr[i] - arr[currMin]) {
                maxIdx = i;
            	minIdx = currMin;
        }
    }
    maxProfit  = arr[maxIdx] - arr[minIdx];
    return maxProfit;
}

var arr1 = [128, 97, 121, 123, 98, 97, 105];
console.log(getMaxProfit(arr1));

console.log(whenToBuy([128, 97, 121, 123, 98, 97, 105]));
