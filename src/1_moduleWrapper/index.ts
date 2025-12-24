// IIFE Function

export const Wrapper: Function = () => {

  (function (exports, require, module, __filename, __dirname) { // Node Js internal module wrapper function
    console.log("Inside Module Wrapper IIFE Function");
  })()

  // __filename -> Give a full path of the current file location
  // __dirname -> Give a full path of the current directory


  console.log(__filename);
  console.log(__dirname);

}