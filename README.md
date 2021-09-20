![build](https://github.com/filipevoges/isset/actions/workflows/node.js.yml/badge.svg)

# isset
`isset` for javascript - inspired by [php](https://www.php.net/manual/en/function.isset.php)

## Installation
```bash
npm install --save filipevoges/isset
```

## Example usage

```javascript
import('@filipevoges/isset');

"1".isset()                 // True
[].isset()                  // True
[].isset("foo")             // false
[].isset(0)                 // false
["foo"].isset("foo")        // false
["foo"].isset(0)            // True
{}.isset()                  // True
{0: "foo"}.isset(0)         // True
{0: "foo"}.isset("foo")     // false
isset(1)                    // True
isset("1")                  // True
isset([])                   // True
isset([], "foo")            // false
isset([], 0)                // false
isset(["foo"], "foo")       // false
isset(["foo"], 0)           // True
isset({})                   // True
isset({0: "foo"}, 0)        // True
isset({0: "foo"}, 1)        // false
isset({0: "foo"}, "foo")    // false
```

## Issues

If there is any problem, please report on [Issues page](https://github.com/FilipeVoges/isset/issues)
