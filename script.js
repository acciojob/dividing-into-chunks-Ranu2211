const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code her
    let result = [];
    let currSum = 0;
    let currSubArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (currSum + arr[i] <= n) {
            currSubArr.push(arr[i]);
            currSum += arr[i];
        } else {
           if (currSubArr.length > 0) {
                result.push(currSubArr);
            }
           currSubArr = [arr[i]];
            currSum = arr[i];
        }
    }
    if (currSubArr.length > 0) {
        result.push(currSubArr);
    }
    
    return result;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
