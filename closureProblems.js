
//Two Problems with Closures
//Suppose we have a function that processes a large amount of data, and we choose to go the callback hell route. There are two main issues:
//1). The big data variable is alive until the end of the nested closure, or rather the innermost closure. This prevents the garbage collector on client can't clean the data up. 
function process (bigdata, cb) {
    remoteCall(bigdata, function(err, something) {
        storeSomething(something, function (err, res) {
            // this funcion is short-lived and hard to optimize
            // bigdata is still in scope!
            cb(null, res * 2);
        })        
    })
}