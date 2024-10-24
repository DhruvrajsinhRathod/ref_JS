// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

function revNumber(n) {
  let x = n.toString();
  return x.split("").reverse().join("");
}

console.log(revNumber(123));
