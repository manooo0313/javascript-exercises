const repeatString = function(str, num) {
    if (num < 0) {
        return ("ERROR");
    } else if (num === 0) {
        return ("");
    } else {
        let results = str;
        for (let i = 1; i < num; i++) {
            results = results + str;
        } 
        return results;
    }
}

module.exports = repeatString
