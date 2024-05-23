function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function mutiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

const functions = ['+', '-', '*', '/']
const nums = ['1', '2', '3', '4','5','6','7','8','9','0',]

const functionButtonsContainer = document.querySelector("function-buttons-container")
const numButtonsContainer = document.querySelector("num-buttons-container")

functionButtonsContainer.forEach(symbol, ()=>{
    const button = document.createElement('button')
    button.textContent = symbol
    functionButtonsContainer.appendChild(button);
})

numButtonsContainer.forEach(number, ()=>{
    const numButton = document.createElement('button')
    numButton.textContent = number
    numButtonsContainer.appendChild(numButton)
})

