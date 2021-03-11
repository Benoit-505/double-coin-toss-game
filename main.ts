input.onButtonPressed(Button.A, function () {
    if (num1 == 0) {
        basic.showString("H")
    } else if (num1 == 1) {
        basic.showString("T")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (num1 == num2) {
        basic.showString("P1 WINS")
    } else if (num1 != num2) {
        basic.showString("P2 WINS")
    }
    num1 = randint(0, 1)
    num2 = randint(0, 1)
})
input.onButtonPressed(Button.B, function () {
    if (num2 == 0) {
        basic.showString("H")
    } else if (num2 == 1) {
        basic.showString("T")
    }
})
let num2 = 0
let num1 = 0
num1 = randint(0, 1)
num2 = randint(0, 1)
basic.forever(function () {
	
})
