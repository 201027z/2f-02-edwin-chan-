let conther = 0
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    conther = 0
    while (conther <= 4) {
        led.plot(conther, 0)
        basic.pause(500)
        basic.clearScreen()
        conther += 1
    }
})
basic.forever(function () {
	
})
