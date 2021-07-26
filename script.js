const numOfDiceElem = document.getElementById('num-of-dice')
const sidesElem = document.getElementById('sides')
const rollButtonElem = document.getElementById('roll-button')

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * ((max + 1) - min)) + min
}

const displayErrorMessage = (message) => {
    // Display error message, change div class list and css to not be hidden
}

const rollDice = () => {
    let numOfDice = Number(numOfDiceElem.value)
    let sides = Number(sidesElem.value)
    console.log(numOfDice, sides)
    if (numOfDice == 0 || isNaN(numOfDice)) {
        displayErrorMessage("Please enter a number")
        return
    } 
    
    if (numOfDice >= 1 && numOfDice <= 50) {
        let results = []
        for (let i = 0; i < numOfDice; i++) {
            const dieNumber = getRandomNumber(1, sides)
            results.push(dieNumber)
        }

        console.log(results)
    } else {
        displayErrorMessage("Please enter a number from 1 to 50")
    }
}


rollButtonElem.addEventListener('click', rollDice)