var lhlhlihui = {
    chunk: function(array, size = 1) {
        var result = [];
        for (var i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }

    return result;
    },
};
