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
    compact:function(array) {
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
     * @param {array} array    The array to concatenate.
     * @param {any} [values]   The values to concatenate.
     * @returns {array}        Returns the new concatenated array.
     */
    concat:function(array, values) {
        var result = [];
        for (var i = 0; i < arguments.length; i++) {
            result.push(arguments[i]);
        }

        return result;
    },
};
