input.onButtonPressed(Button.A, function () {
    basic.showString("tengo sed")
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("ayudaaa")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("jajaja")
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("adios")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showString("silencio")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("tengo hambre")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("Que vamos a hacer hoy")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("me mareooo")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("" + (input.temperature()))
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("ZzZz")
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("dejame en paz")
    basic.showIcon(IconNames.Angry)
})
music.play(music.stringPlayable("C5 B E A B G A G ", 120), music.PlaybackMode.UntilDone)
basic.showLeds(`
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    . . . . .
    `)
