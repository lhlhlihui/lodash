// http://lhlhlihui.coding.me/miao/lodash/lhlhlihui-lodash.js

var lhlhlihui = {
    /**
     * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
     * 
     * @param {array} array          The array to process.
     * @param {number} [size = 1]    The length of each chunk.
     * @returns {array}              Returns the new array of chunks.
     */
    chunk: function(array, size = 1) {
        var result = [];
        for (var i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

        return result;
    },

    /**
     * Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
     * 
     * @param {array} array    The array to compact.
     * @returns {array}        Returns the new array of filtered values.
     */
    compact: function(array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                result.push(array[i]);
            }
        }

        return result;
    },

    /**
     * Creates a new array concatenating array with any additional arrays and/or values.
     * 
     * @param {array} array     The array to concatenate.
     * @param {...any} [values]   The values to concatenate.
     * @returns {array}         Returns the new concatenated array.
     */
    concat: function(array, ...values) {
        var result = array;
        for (var i = 1; i < arguments.length; i++) {
            result = result.concat(arguments[i]);
        }

        return result;
    },

    /**
     * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
     * 
     * @param {array} array          The array to inspect.
     * @param {...array} [values]    The values to exclude.
     * @returns {array}              Returns the new array of filtered values.
     */
    difference: function(array, ...values) {
        var result = [];
        const others = values.reduce((mul, val) => {
            return mul.concat(val);
        });

        for (var x of array) {
            var othersContainsX = false;
            for (var y of others) {
                if (x === y) {
                    othersContainsX = true;
                    break;
                }
            }

            if (!othersContainsX) {
                result.push(x);
            }
        }

        return result;
    },

    /**
     * Fills elements of array with value from start up to, but not including, end.
     * Note: This method mutates array.
     * 
     * @param {array} array                    The array to fill.
     * @param {any} value                      The value to fill array with.
     * @param {number} [start = 0]             The start position.
     * @param {number} [end = array.length]    The end position.
     * @returns {array}                        Returns array.
     */
    fill: function(array, value, start = 0, end = array.length) {
        for (var i = start; i < end; i++) {
            array[i] = value;
        }

        return array;
    },

    /**
     * Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To avoid this behavior use _.forIn or _.forOwn for object iteration.
     * 
     * @param {array | object} collection         The collection to iterate over.
     * @param {function} [iteratee=_.identity]    The function invoked per iteration.
     * @returns {any}                             Returns collection.
     */
    forEach: function(collection, iteratee = _.identity) {
        for (var i = 0; i < collection.length; i++) {
            iteratee(collection[i], i, collection);
        }

        return collection;
    },
    
    /**
     * Computes number rounded up to precision.
     * 
     * @param {number} number             The number to round up.
     * @param {number} [precision = 0]    The precision to round up to.
     * @returns {number}                  Returns the rounded up number.
     */
    ceil: function(number, precision = 0) {
        if (number * 10 ** precision % 1 === 0) {
            return number;
        } else {
            return ((number  * 10 ** precision + 1) | 0 ) / 10 ** precision;
        }
    },

    /**
     * Computes number rounded down to precision.
     * 
     * @param {number} number             The number to round down.
     * @param {number} [precision = 0]    The precision to round down to.
     * @returns {number}                  Returns the rounded down number.
     */
    floor: function(number, precision = 0) {
        return (number * 10 ** precision | 0 ) / 10 ** precision;
    },
    
    /**
     * Computes number rounded to precision.
     * 
     * @param {number} number             The number to round.
     * @param {number} [precision = 0]    The precision to round to.
     * @returns {number}                  Returns the rounded number.
     */
    round: function(number, precision = 0) {
        if (number * 10 ** precision % 1 >= .5) {
            return ((number  * 10 ** precision + 1) | 0 ) / 10 ** precision;
        } else {
            return (number  * 10 ** precision | 0 ) / 10 ** precision;
        }
    },
};
