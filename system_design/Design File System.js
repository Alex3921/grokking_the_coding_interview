// https://leetcode.com/problems/design-file-system/

// You are asked to design a file system that allows you to create new paths and associate them with different values.

// The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string "" and "/" are not.

// Implement the FileSystem class:

// bool createPath(string path, int value) Creates a new path and associates a value to it if possible and returns true. Returns false if the path already exists or its parent path doesn't exist.
// int get(string path) Returns the value associated with path or returns -1 if the path doesn't exist.

// Example 1:

// Input:
// ["FileSystem","createPath","get"]
// [[],["/a",1],["/a"]]
// Output:
// [null,true,1]
// Explanation:
// FileSystem fileSystem = new FileSystem();

// fileSystem.createPath("/a", 1); // return true
// fileSystem.get("/a"); // return 1

class FileSystem {
  constructor() {
    this.directories = {};
  }

  createPath(path, value) {
    const paths = path.split("/");
    const n = paths.length;

    let root = this.directories;

    for (let i = 1; i < n - 1; i++) {
      if (!root[paths[i]]) return false;
      root = root[paths[i]];
    }

    if (root[paths[n - 1]]) return false;

    root[paths[n - 1]] = {};
    root[paths[n - 1]].value = value;

    return true;
  }

  get(path) {
    const paths = path.split("/");
    const n = paths.length;
    let root = this.directories;

    for (let i = 1; i < n; i++) {
      if (!root[paths[i]]) return -1;
      root = root[paths[i]];
    }
    return root.value;
  }
}
// Time complexity: O(M) -> M is the length of path
// Space complexity: O(K) -> K is the number of unique paths that we add

const fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // return true
console.log(fileSystem.createPath("/leet/code", 2)); // return true
console.log(fileSystem.get("/leet/code")); // return 2
fileSystem.createPath("/c/d", 1); // return false because the parent path "/c" doesn't exist.
console.log(fileSystem.get("/c")); // return -1 because this path doesn't exist.
