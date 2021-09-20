/**
 * Determine if a variable is declared and is different than null
 *
 * @param key
 * @return bool
 *
 * @author Filipe Voges <filipe.vogesh@gmail.com>
 * @version 1.0.1
 * @since 2021-09-17
 */
Object.prototype.isset = function() {
	if(arguments.length > 2) {
		throw new Error('Too many arguments');
	}

	let obj = arguments[0];
	let keyArgCheck = 1;
	if(typeof this.global === 'undefined') {
		obj = this;
		keyArgCheck = 0;
	}

	if(typeof obj === 'undefined' || obj === null) {
		return false;
	}

	let argCheck = arguments[keyArgCheck];
	if (typeof argCheck !== 'undefined') {

		if (typeof obj[argCheck] === 'undefined' || obj[argCheck] === null) {
			return false;
		}
	}

	return true;
}

/**
 * @example "1".isset() // True
 * @example [].isset() // True
 * @example [].isset("foo") // false
 * @example [].isset(0) // false
 * @example ["foo"].isset("foo") // false
 * @example ["foo"].isset(0) // true
 * @example {}.isset() // true
 * @example {0: "foo"}.isset(0) // true
 * @example {0: "foo"}.isset("foo") // false
 * @example isset(1) // True
 * @example isset("1") // True
 * @example isset([]) // True
 * @example isset([], "foo") // false
 * @example isset([], 0) // false
 * @example isset(["foo"], "foo") // false
 * @example isset(["foo"], 0) // true
 * @example isset({}) // true
 * @example isset({0: "foo"}, 0) // true
 * @example isset({0: "foo"}, 1) // false
 * @example isset({0: "foo"}, "foo") // false
 */
