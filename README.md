### Closures

Using nested closures when performing data-intensive operations has several disadvantages, particularly when looping.

See an example of nested closure below:
```
function process(bigdata, cb) {
  remoteCall(bigdata, function (err, something) {
    storeSomething(something, function (err, res) {
      // this funcion is short-lived and hard to optimize
      // bigdata is still in scope!
      cb(null, res * 2);
    });
  });
```

This will keep the `bigdata` arg around until the end of the nested closer, or the innermost closer. Sapping memory usage the entire time.

Instead, calling a new function, can increase performance by taking `bigdata` out of scope as soon as it's called.

Like so: