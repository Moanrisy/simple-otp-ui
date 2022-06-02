const firstInput = document.getElementById("first");
const userInput = ["first", "second", "third", "fourth", "fifth", "sixth"];
const resendOtpBtn = document.getElementById("resendOtp-btn");
const backBtn = document.getElementById("back-btn");
const content = document.querySelector(".content")
const inputNumber = document.querySelector(".input-number")

let currentElement = 0;

firstInput.focus();

// add space for phone number
document.getElementById("telphone").addEventListener("keyup", function () {
  let phoneNumber = this.value;
  if (phoneNumber.length == 4 || phoneNumber.length == 9) {
    this.value=this.value+ " ";
  }
})

backBtn.addEventListener("click", () => {
  alert("back button clicked");
  content.classList.remove("active")
  inputNumber.classList.add("active")
});

resendOtpBtn.addEventListener("click", () => {
  alert("OTP sent");
});

function clickEvent(first, last) {
  if (last != "last") {
    if (first.value.length) {
      document.getElementById(last).focus();
    }
  }

  if (first.id == "sixth") {
    checkOTP();
  }
}

function clicked(inputClicked) {
  currentElement = inputClicked;
  document.getElementById(userInput[currentElement]).value = "";
}

function press(number) {
  var currentInput = document.getElementById(userInput[currentElement]);
  currentInput.value = number;

  if (currentElement == 5) {
    checkOTP();
  }

  if (currentElement < 5) {
    currentElement += 1;
    document.getElementById(userInput[currentElement]).focus();
  }
}

function checkOTP() {
  alert("checking OTP");
}
