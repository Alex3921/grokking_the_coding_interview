// Given a sequence originalSeq and an array of sequences, write a method to
// find if originalSeq can be uniquely reconstructed from the array of sequences.

// Unique reconstruction means that we need to find if originalSeq is the only
// sequence such that all sequences in the array are subsequences of it.

// Example 1:

// Input: originalSeq: [1, 2, 3, 4], seqs: [[1, 2], [2, 3], [3, 4]]
// Output: true
// Explanation: The sequences [1, 2], [2, 3], and [3, 4] can uniquely reconstruct
// [1, 2, 3, 4], in other words, all the given sequences uniquely define the order of numbers
// in the 'originalSeq'.

function can_construct(originalSeq, sequences) {
  const sortedOrder = new Array();

  if (originalSeq.length === 0) {
    return false;
  }

  // a. Initialize the graph
  const graph = new Map();
  const inDegree = new Map();

  sequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      graph.set(sequence[i], []);
      inDegree.set(sequence[i], 0);
    }
  });

  // b. Build the graph
  sequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length - 1; i++) {
      const parent = sequence[i];
      const child = sequence[i + 1];
      graph.get(parent).push(child);
      inDegree.set(child, inDegree.get(child) + 1);
    }
  });

  // c. Find sources and add them to a list
  const sources = new Array();
  const vertices = [...inDegree.keys()];

//   if (vertices.length !== originalSeq.length) return false;
  vertices.forEach((key) => {
    if (inDegree.get(key) === 0) {
      sources.push(key);
    }
  });

  // d. Add sources to the sortedOrder and decrease children's inDegree
  while (sources.length > 0) {
    if (sources.length > 1) return false;
    if (originalSeq[sortedOrder.length] !== sources[0]) return false;

    const vertex = sources.shift();
    sortedOrder.push(vertex);
    graph.get(vertex).forEach((child) => {
      inDegree.set(child, inDegree.get(child) - 1);
      if (inDegree.get(child) === 0) {
        sources.push(child);
      }
    });
  }

  return sortedOrder.length === originalSeq.length;
}

// Time complexity: O(V + N)
// Space complexity: O(V + N)

console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [2, 4],
    ]
  )}`
);
console.log(
  `Can construct: ${can_construct(
    [3, 1, 4, 2, 5],
    [
      [3, 1, 5],
      [1, 4, 2, 5],
    ]
  )}`
);
