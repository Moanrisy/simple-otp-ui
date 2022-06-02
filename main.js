const firstInput = document.getElementById("first")
const userInput = ["first", "second", "third", "fourth", "fifth", "sixth"];
const resendOtpBtn = document.getElementById("resendOtp-btn")

let currentElement = 0;

firstInput.focus()

resendOtpBtn.addEventListener('click', () => {
    alert("OTP sent")
})

function clickEvent(first, last) {
    if (last != "last") {
        if (first.value.length) {
            document.getElementById(last).focus();
        }
    }

    if (first.id == "sixth") {
        checkOTP()
    }
}

function clicked(inputClicked) {
    currentElement = inputClicked
    document.getElementById(userInput[currentElement]).value = ""
}

function press(number) {
    var currentInput = document.getElementById(userInput[currentElement])
    currentInput.value = number;

    if (currentElement == 5) {
        checkOTP();
    }

    if (currentElement < 5) {
        currentElement+=1
        document.getElementById(userInput[currentElement]).focus()
    }
}

function checkOTP() {
    alert('checking OTP')
}