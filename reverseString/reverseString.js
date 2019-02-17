const reverseString = function(str) {
    let reversebuilt = "" ;
    let strl = str.length;
    for (let i = 0; i < strl; i++) {
        reversebuilt = str.charAt(0) + reversebuilt;
        str = str.slice(1);
    }
    return reversebuilt; 
}

module.exports = reverseString
