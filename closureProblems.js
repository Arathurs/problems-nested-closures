//Two Problems with Closures
//Suppose we have a function that processes a large amount of data, and we choose to go the callback hell route. There are two main issues:
//1). The big data variable is alive until the end of the nested closure, or rather the innermost closure. This prevents the garbage collector on client can't clean the data up. And naturally, this will take even more time, because you have a large amount of data to process.
//2). The functions are very short lived, so also very hard to optimize and improve by the run-time.
function process(bigdata, cb) {
  remoteCall(bigdata, function (err, something) {
    storeSomething(something, function (err, res) {
      // this funcion is short-lived and hard to optimize
      // bigdata is still in scope!
      cb(null, res * 2);
    });
  });
}

// ***Avoid nested closures***
// For example, if you have a for loop thats very intensive, consider
// calling another function. Dont forget you're not required to call
// another function. Don't forget, you can always call another function
// instead of doing anything nested or in-line
function processTwo(bigdata, cb) {
  remoteCall(bigdata, function (err, something) {
    //bigdata exits scope here
    callStoreSomething(something, cb);
  });
}
