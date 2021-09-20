'use strict'

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
