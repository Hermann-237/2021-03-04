/* # Debugging Exercises

#### 5. Recursion
The following code should get the sum of the array items, but it does not work. Fix it so that it will.
```javascript
function sum(array) {
    let result = array.pop() + sum(array);
    return result;
}

console.log(sum([1, 2, 3])); */
console.log('******First Solution'); //3+2+1

const sum = (arr)=>{
    let result = (arr.length === 1)? arr[0]: arr.pop()+ sum(arr);
    return result;
}
console.log(sum([1, 2, 3]));

console.log('******second Solution');

/* const sum = (arr)=>{
    let result = (arr.length === 1)? arr.pop(): arr[0] + sum(arr.slice(1));
    return result;
}
console.log(sum([1, 2, 3])); */

