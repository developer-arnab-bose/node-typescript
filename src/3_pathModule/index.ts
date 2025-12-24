import path from "path";

const PathModule = () => {
  // Alaways use path module to handle any folder path. It is used to handle file path on differnt os like Windows uses c:\\ and linux users /root/

  console.log(path.basename("/Users/arnab/Developer/Website/Node js/node-typescript/src/index.ts")); // Gives the filename or folder
  console.log(path.basename("/Users/arnab/Developer/Website/Node js/node-typescript/src/index.ts", ".ts")); // Removes the extension

  console.log(path.basename("/Users/arnab/Developer/index.html")); // Gives the file name
  console.log(path.basename("/Users/arnab/Developer/app.js", ".js")); // remove last string as here it removes the extension
  console.log(path.dirname("/Users/arnab/Developer/app.js")); // Gives the directory name
  console.log(path.extname("/Users/arnab/Developer/app.js")); // Gives the file extension
  console.log(path.join("/Users", "arnab", "Developer", "app.js")); // Joins the folder and file name to make the complete path
  // GO UP A LEVEL
  console.log(path.join("/Users", "arnab", "Developer", "..")); // This will go one level up and points to arnab
  console.log(path.join("/Users", "arnab", "Developer", "..", "..")); // This will go two levels up and points Users

  // Fixing the path
  console.log(path.normalize("/Users//arnab///Developer/app.js")); // Extra Slashes -> /Users/arnab/Developer/app.js
  console.log(path.normalize("/Users/arnab/Developer/./app.js")); // Current Directory(.) -> /Users/arnab/Developer/app.js
  console.log(path.normalize("/Users/arnab/Developer/../app.js")); // Parent Directory(..) -> /Users/arnab/app.js
  console.log(path.normalize("C:\\Users/arnab//Developer\\app.js")); // Mixed Slashes -> C:\Users\arnab\Developer\app.js

  console.log(path.parse("/Users/arnab/Developer/app.js")); // returs a object
  console.log(path.parse("/Users/arnab/Developer/app.js").base); // base to get filename
  console.log(path.parse("/Users/arnab/Developer/app.js").name); // just filename
  console.log(path.parse("/Users/arnab/Developer/app.js").ext); // extension
}

export default PathModule