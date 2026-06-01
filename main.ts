input.onButtonPressed(Button.A, function () {
    basic.showString("tengo sed")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("tengo hambre")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("")
})
basic.forever(function () {
	
})
