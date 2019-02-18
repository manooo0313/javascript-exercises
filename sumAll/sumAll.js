const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (num1 >= 0 && num2 >= 0) {
            if (num1 < num2) {
                while (num1 <= num2) {
                    sum += num1;
                    num1 ++;
                } return sum;
                
            } else {
                while (num2 <= num1) {
                    sum += num2;
                    num2 ++;
                } return sum;
            }
        } else{
            return ("ERROR");
        }
    } else {
        return ("ERROR");
    }
}

module.exports = sumAll
