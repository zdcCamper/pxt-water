let water = 0
radio.setGroup(1)
basic.forever(function () {
    water = pins.analogReadPin(AnalogPin.P0)
    if (water < 400) {
        game.pause()
    } else {
        game.startCountdown(900000)
    }
})
