const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code her
let result = [];
let currSubArr = [];
for(let i=0;i< arr.length;i++){
    if(currSubArr.reduce((sum,num) => sum+num, 0) + arr[i] <= n){
        currSubArr.push(arr[i]);
    }else{
        result.push(currSubArr);
        currSubArr = [arr[i]];
    }
}
if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
