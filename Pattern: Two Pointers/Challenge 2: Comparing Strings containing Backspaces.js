// Statement:
// Given two strings containing backspaces (identified by the character ‘#’),
// check if the two strings are equal.

// Example 1:

// Input: str1="xy#z", str2="xzz#"
// Output: true
// Explanation: After applying backspaces the strings become "xz" and "xz" respectively.
// Example 2:

// Input: str1="xy#z", str2="xyz#"
// Output: false
// Explanation: After applying backspaces the strings become "xz" and "xy" respectively.
// Example 3:

// Input: str1="xp#", str2="xyz##"
// Output: true
// Explanation: After applying backspaces the strings become "x" and "x" respectively.
// In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
// Example 4:

// Input: str1="xywrrmp", str2="xywrrmu#p"
// Output: true
// Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.

const backspace_compare = function (str1, str2) {
  let index1 = str1.length - 1,
    index2 = str2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1);
    let i2 = get_next_valid_char_index(str2, index2);

    if (i1 < 0 && i2 < 0) {
      // reached the end of both strings
      return true;
    }

    if (i1 < 0 || i2 < 0) {
      // reached the end of one of the strings
      return false;
    }

    if (str1[i1] !== str2[i2]) { // check if the characters are not equal
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
};


const get_next_valid_char_index = function(str, index) {
    let backspaceCount = 0;

    while(index >= 0) {
        if(str[index] === "#") { // found a backspace character
            backspaceCount++;
        } else if (backspaceCount > 0) { // found a non-backspace character
            backspaceCount--;
        } else {
            break;
        }

        index--; // skip a backspace or a character
    }
    return index;
}

// Time complexity: O(n+m)
// Space complexity: O(1)

console.log(backspace_compare("xy#z", "xzz#"));
console.log(backspace_compare("xy#z", "xyz#"));
console.log(backspace_compare("xp#", "xyz##"));
console.log(backspace_compare("xywrrmp", "xywrrmu#p"));
