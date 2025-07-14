function calculateArithmetic( a, b, arithematiicFinalFunction){
    const ans = arithematiicFinalFunction(a,b);
    return ans;
}
function sum(a, b) {
    return a + b;
}
const value = calculateArithmetic(5, 10, sum);
console.log(value);