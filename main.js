const firstInput = document.getElementById("first")
const userInput = ["first", "second", "third", "fourth", "fifth", "sixth"];
let currentElement = 0;

firstInput.focus()

function clickEvent(first, last) {
    if (first.value.length) {
        document.getElementById(last).focus();
    }
}

function clicked(inputClicked) {
    currentElement = inputClicked
    document.getElementById(userInput[currentElement]).value = ""
}

function press(number) {
    var currentInput = document.getElementById(userInput[currentElement])
    currentInput.value = number;

    if (currentElement < 5) {
        currentElement+=1
        document.getElementById(userInput[currentElement]).focus()
    }
}