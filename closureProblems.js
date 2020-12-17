
function process (bigdata, cb) {
    remoteCall(bigdata, function(err, something) {
        storeSomething(something, function (err, res) {
            // this funcion is short-lived and hard to optimize
            // bigdata is still in scope!
            cb(null, res * 2);
        })        
    })
}