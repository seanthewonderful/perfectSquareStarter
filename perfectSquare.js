
const perfectSquare = (num) => {
    if(Number.isInteger(Math.sqrt(num))){
        let newNum = (Math.sqrt(num) + 1) ** 2
        // let newSquare = newNum ** 2
        console.log(newNum)
    }else{
        console.log(-1)
    }
}

let nextPerfectSquare = (perfectSquare) => (Math.sqrt(perfectSquare) % 1 === 0) ? Math.pow(Math.sqrt(perfectSquare) + 1, 2) : -1;

var startTime = performance.now()
// perfectSquare(998001)
console.log(nextPerfectSquare(998001))
var endTime = performance.now()

console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)