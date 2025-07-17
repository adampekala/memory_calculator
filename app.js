var STATE_TYPE = {
    initial: "start",
    next: "next",
    check: "check",
    asses: "asses",
};
var OPERATION_TYPE = {
    addition: "add",
    substraction: "minus",
    multiplication: "multiply",
};
var state = STATE_TYPE.initial;
var arytmeticOperation = OPERATION_TYPE.multiplication;
var scoreNumber = 0;
var numberLeft = document.getElementById("left_number");
var numberRight = document.getElementById("right_number");
var randomNumber = function () {
    return Math.floor(Math.random() * 10) + 1;
};
var leftDigit = "--";
var rightDigit = "--";
numberLeft.textContent = leftDigit;
numberRight.textContent = rightDigit;
var buttonMainContainer = document.getElementById("button_container");
var buttonMain = document.getElementById("main_button");
//!!!!!!!!!!!
var buttonDotRight = document.getElementById("button_dot-right");
var buttonDotLeft = document.getElementById("button_dot-left");
var instuction = document.getElementById("button_instruction");
var score = document.getElementById("score");
var scoreTitle = document.getElementById("score_title");
buttonMain.addEventListener("mouseenter", function (ev) {
    buttonMain.classList.add("pressed");
    buttonMainContainer.classList.add("pressed");
});
buttonMain.addEventListener("mouseleave", function (ev) {
    buttonMain.classList.remove("pressed");
    buttonMainContainer.classList.remove("pressed");
});
buttonMain.addEventListener("mousedown", function (ev) {
    switch (true) {
        case state === STATE_TYPE.initial: {
            buttonMain.classList.add("clicked");
            buttonMainContainer.classList.add("clicked");
            leftDigit = randomNumber().toString();
            rightDigit = randomNumber().toString();
            numberLeft.textContent = leftDigit;
            numberRight.textContent = rightDigit;
            state = STATE_TYPE.check;
            instuction.innerText = state;
            break;
        }
        case state === STATE_TYPE.check: {
            buttonMain.classList.add("clicked");
            buttonMainContainer.classList.add("clicked");
            buttonDotLeft.classList.add("hightlight");
            buttonDotRight.classList.add("hightlight");
            state = STATE_TYPE.asses;
            instuction.innerText = state;
            scoreTitle.innerText = "result";
            switch (true) {
                case arytmeticOperation === OPERATION_TYPE.addition: {
                    score.innerText = "".concat(+leftDigit + +rightDigit);
                    break;
                }
                case arytmeticOperation === OPERATION_TYPE.substraction: {
                    score.innerText = "".concat(+leftDigit - +rightDigit);
                    break;
                }
                case arytmeticOperation === OPERATION_TYPE.multiplication: {
                    score.innerText = "".concat(+leftDigit * +rightDigit);
                    break;
                }
                default:
                    break;
            }
            break;
        }
        case state === STATE_TYPE.asses: {
            if (ev.target.id === "button_dot-right") {
                scoreNumber--;
                state = STATE_TYPE.check;
                buttonDotLeft.classList.remove("hightlight");
                buttonDotRight.classList.remove("hightlight");
                buttonMainContainer.classList.add("movedRight");
                instuction.innerText = state;
                leftDigit = randomNumber();
                rightDigit = randomNumber();
                numberLeft.textContent = leftDigit.toString();
                numberRight.textContent = rightDigit.toString();
                scoreTitle.innerText = "score";
                score.innerText = scoreNumber.toString();
            }
            if (ev.target.id === "button_dot-left") {
                scoreNumber++;
                state = STATE_TYPE.check;
                buttonDotLeft.classList.remove("hightlight");
                buttonDotRight.classList.remove("hightlight");
                buttonMainContainer.classList.add("movedLeft");
                instuction.innerText = state;
                leftDigit = randomNumber();
                rightDigit = randomNumber();
                numberLeft.textContent = leftDigit.toString();
                numberRight.textContent = rightDigit.toString();
                scoreTitle.innerText = "score";
                score.innerText = scoreNumber.toString();
            }
            break;
        }
        default:
            break;
    }
});
buttonMain.addEventListener("mouseup", function (ev) {
    buttonMain.classList.remove("clicked");
    buttonMainContainer.classList.remove("clicked");
    buttonMainContainer.classList.remove("movedRight");
    buttonMainContainer.classList.remove("movedLeft");
});
var optionButton = document.getElementById("option_button");
var optionButtonClose = document.getElementById("option_button-close");
var optionContainer = document.getElementById("option_container");
optionButton.addEventListener("mousedown", function (ev) {
    console.log("option_button");
    optionButton.classList.add("clicked");
    optionContainer.classList.add("shown");
});
optionButton.addEventListener("mouseup", function (ev) {
    console.log("option_button");
    optionButton.classList.remove("clicked");
});
optionButtonClose.addEventListener("mousedown", function (ev) {
    optionButtonClose.classList.add("clicked");
    optionContainer.classList.remove("shown");
});
optionButtonClose.addEventListener("mouseup", function (ev) {
    optionButtonClose.classList.remove("clicked");
});
var sqrPlus = document.getElementById("sqr-plus");
var sqrMinus = document.getElementById("sqr-minus");
var sqrMultiply = document.getElementById("sqr-multiply");
var screenOperationSign = document.getElementById("screen_operation_sign");
sqrPlus.addEventListener("click", function (ev) {
    screenOperationSign.innerText = "+";
    arytmeticOperation = OPERATION_TYPE.addition;
});
sqrMinus.addEventListener("click", function (ev) {
    screenOperationSign.innerText = "-";
    arytmeticOperation = OPERATION_TYPE.substraction;
});
sqrMultiply.addEventListener("click", function (ev) {
    screenOperationSign.innerText = "*";
    arytmeticOperation = OPERATION_TYPE.multiplication;
});
