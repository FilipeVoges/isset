import('@filipevoges/isset');


// TODO
console.log("1".isset());                 // True
console.log([].isset());                  // True
console.log([].isset("foo"));             // false
console.log([].isset(0));                 // false
console.log(["foo"].isset("foo"));        // false
console.log(["foo"].isset(0));            // True
console.log({}.isset());                  // True
console.log({0: "foo"}.isset(0));         // True
console.log({0: "foo"}.isset("foo"));     // false
console.log(isset(1));                    // True
console.log(isset("1"));                  // True
console.log(isset([]));                   // True
console.log(isset([], "foo"));            // false
console.log(isset([], 0));                // false
console.log(isset(["foo"], "foo"));       // false
console.log(isset(["foo"], 0));           // True
console.log(isset({}));                   // True
console.log(isset({0: "foo"}, 0));        // True
console.log(isset({0: "foo"}, 1));        // false
console.log(isset({0: "foo"}, "foo"));    // False
