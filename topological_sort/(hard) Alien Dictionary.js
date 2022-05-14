// There is a dictionary containing words from an alien language for
// which we don’t know the ordering of the alphabets.
// Write a method to find the correct order of the alphabets in the alien language.
// It is given that the input is a valid dictionary and there exists an ordering
// among its alphabets.

// Example 1:

// Input: Words: ["ba", "bc", "ac", "cab"]
// Output: bac
// Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
// from the given words we can conclude the following ordering among its characters:

// 1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
// 2. From "bc" and "ac", we can conclude that 'b' comes before 'a'

// From the above two points, we can conclude that the correct character order is: "bac"

const find_order = function (words) {
  if (words.length === 0) return "";

  const charsOrder = [];

  // a. Initialize the graph
  const graph = {}; // adjacency list
  const inDegree = {}; // count of incoming edges

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      graph[word[i]] = [];
      inDegree[word[i]] = 0;
    }
  });

  // b. Build the graph
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const parent = w1[j];
      const child = w2[j];
      if (parent !== child) {
        graph[parent].push(child);
        inDegree[child] += 1;
        break;
      }
    }
  }

  // c. Add sources to charsOrder, i.e. all vertices with 0 in-degrees
  const sources = [];
  const chars = Object.keys(inDegree);
  chars.forEach((char) => {
    if (inDegree[char] === 0) {
      sources.push(char);
    }
  });

  // d. Add sources to the charsOrder and subtract 1 from children's inDegree
  while (sources.length > 0) {
    const vertex = sources.shift();
    charsOrder.push(vertex);
    graph[vertex].forEach((child) => {
      inDegree[child] -= 1;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // e. If charsOrder doesn't contain all cahrs then there is a
  // cyclic dependency which means that we won't be able to find the correct ordering
  if (charsOrder.length !== chars.length) {
    return "";
  }

  return charsOrder.join("");
};

// Time complexity: O(V + N)
// Space complexity: O(V + N)

console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`);
console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`);
console.log(
  `Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`
);
