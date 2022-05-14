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
