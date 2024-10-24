// Write a JavaScript function that checks whether a passed string is palindrome or not?
function check_Palindrome(x) {
  let start = 0;
  let end = x.length - 1;
  while (end > start) {
    if (x[start] != x[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(check_Palindrome("madam"));
