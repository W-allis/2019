function type(data) {

	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

function deepCopy(data) {
	return type(data) === 'object' ? Object.keys(data).reduce((total, curr) => (total[curr] = deepCopy(data[curr]), total), { }) : 
			type(data) === 'array' ? data.map(deepCopy) : data
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */

function merge() {
	
	var firstArgType = type(arguments[0]), result = {}
	
	function doJob(resource, target) {
		Object.keys(target).forEach(function(key) {
			console.log(type(resource[key]), type(target[key]))
			if (type(resource[key]) === 'object' && type(target[key]) === 'object') {
				doJob(resource[key], target[key])
			} else if (type(resource[key]) === 'array' && type(target[key]) === 'array') {

				resource[key] = resource[key].concat(target[key])
			} else {
				resource[key] = target[key]
			}
		})
	}
	
	for (var i = 0; i < arguments.length; i++) {
		if (type(arguments[i]) === firstArgType) {

			doJob(result, deepCopy(arguments[i]))
		}
	}
	
	return result
}


var a = {
	name: 'wallis',
	sex: '男',
	value: [
		{ code: '1', value: '2' },
		{ code: '1', value: '3' }
	]
}

var b = {
	name: 'sillaw',
	age: '12',
	value: [
		{ code: '2', value: '2' },
		{ code: '2', value: '3' }
	],
	hobbit: {
		playFooterball: {
			shecduler: '12:00-14:00'
		}
	}
}
//
//
//console.log(merge(a, b))
//b.hobbit.playFooterball.shecduler = '123456'
//console.log(b)
//
//console.log(merge(a, b))
