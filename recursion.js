/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  // inefficient refactor
  return nums[0] * product(nums.splice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  while (words.length > 0) {
    return Math.max(words[0].length,longest(words.splice(1)))
  }
  return 0;

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let out = [];

  function _everyOther(str, i) {
    if (str.length === i) return;

    if (i % 2 === 0) out.push(str[i]);

    _everyOther(str, i + 1);
  }

  _everyOther(str, 0);

  return out.join('');
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  if (arr.length === 0) {
    console.log('INSIDE IF VAL=', val)
    return false;
  }

  return (arr.pop() === val || find(arr, val));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  // odd length only?
  if (i === Math.ceil(str.length / 2)) return true;

  return str[i] === str[str.length - 1 - i] && isPalindrome(str, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
    let out = [];

    function _revString(i) {

      if (i < 0) return;
      out.push(str[i]);
      _revString(i-1);

    }

    _revString(str.length-1);
    return out.join("");
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
