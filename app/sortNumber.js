const biggestNumber = 500
const smallestNumber = 1

const randomNumber = () => {return parseInt(Math.random()*biggestNumber+1)}
const secretNumber = randomNumber()
console.log(secretNumber)

const elementSmallestNumber = document.querySelector('#smallest-number')
elementSmallestNumber.innerHTML = smallestNumber

const elementBiggestNumber = document.querySelector('#biggest-number')
elementBiggestNumber.innerHTML = biggestNumber
