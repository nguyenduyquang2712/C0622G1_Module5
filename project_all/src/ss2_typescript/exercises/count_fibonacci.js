var checkFibonacci = function (num) {
    if (num == 0) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    return checkFibonacci(num - 1) + checkFibonacci(num - 2);
};
var sumFibonacci = 0;
var amountNumber = 10;
var arr = [];
for (var i = 0; i < amountNumber; i++) {
    arr.push(checkFibonacci(i));
    sumFibonacci += checkFibonacci(i);
}
console.log(amountNumber + "số fibonacci đâu tiên: " + arr);
console.log("Tổng " + amountNumber + " số fibonacci đầu tiên: " + sumFibonacci);
