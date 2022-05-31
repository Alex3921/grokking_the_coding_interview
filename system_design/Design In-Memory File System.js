// https://leetcode.com/problems/design-in-memory-file-system/

// Design a data structure that simulates an in-memory file system.

// Implement the FileSystem class:

// FileSystem() Initializes the object of the system.
// List<String> ls(String path)
// If path is a file path, returns a list that only contains this file's name.
// If path is a directory path, returns the list of file and directory names in this directory.
// The answer should in lexicographic order.
// void mkdir(String path) Makes a new directory according to the given path.
// The given directory path does not exist. If the middle directories in the path do not exist,
// you should create them as well.
// void addContentToFile(String filePath, String content)
// If filePath does not exist, creates that file containing given content.
// If filePath already exists, appends the given content to original content.
// String readContentFromFile(String filePath) Returns the content in the file at filePath.

class Directory {
  constructor() {
    this.directories = {};
    this.files = {};
  }
}

class FileSystem {
  constructor() {
    this.root = new Directory();
  }

  getFileDir(filePath) {
    let paths = filePath.substr(1).split("/");
    let length = paths.length;
    let dir = this.root;

    // traverse all paths until we reach the last directory
    for (let i = 0; i < length - 1; i++) {
      dir = dir.directories[paths[i]];
    }

    // return directory and the file name
    return { dir, fileName: paths[length - 1] };
  }

  ls(path) {
    let dir = this.root;
    // if path points to root then skip
    if (path !== "/") {
      // split path on "/" and use substr to skip over the first "/" which would render an empty path
      const paths = path.substr(1).split("/");

      // traverse each path until we reach the last directory
      for (let i = 0; i < paths.length - 1; i++) {
        dir = dir.directories[paths[i]];
      }

      // grab the name of the file
      const name = paths[paths.length - 1];

      // if the file exists we return it's name
      if (dir.files[name] !== undefined) {
        return [name];
      }

      // store the last directory
      dir = dir.directories[name];
    }

    // access and combine name's for both directories and files
    const files = Object.keys(dir.directories).concat(Object.keys(dir.files));
    files.sort();
    return files;
  }

  mkdir(path) {
    let dir = this.root;
    let paths = path.substr(1).split("/");
    for (const name of paths) {
      if (dir.directories[name] === undefined) {
        dir.directories[name] = new Directory();
      }
      dir = dir.directories[name];
    }
  }

  addContentToFile(filePath, content) {
    const { dir, fileName } = this.getFileDir(filePath);
    dir.files[fileName] = (dir.files[fileName] || "") + content;
  }

  readContentFromFile(filePath) {
    const { dir, fileName } = this.getFileDir(filePath);
    return dir.files[fileName];
  }
}

const fileSystem = new FileSystem();
console.log(fileSystem.ls("/")); // return []
console.log(fileSystem.mkdir("/a/b/c"));
console.log(fileSystem.addContentToFile("/a/b/c/d", "hello"));
console.log(fileSystem.ls("/")); // return ["a"]
console.log(fileSystem.readContentFromFile("/a/b/c/d")); // return "hello"
