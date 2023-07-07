input.onButtonPressed(Button.A, function () {
    basic.showNumber(radio2)
    radio2 += 1
})
radio.onReceivedString(function (receivedString) {
    if (found == false) {
        basic.showIcon(IconNames.Yes)
        basic.showString(receivedString)
        found = true
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(radio2)
    radio2 += -1
})
let found = false
let radio2 = 0
radio2 = 256
found = false
basic.forever(function () {
    radio.setGroup(radio2)
    radio.sendNumber(270)
})
