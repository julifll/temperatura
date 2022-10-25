basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 20) {
        basic.showIcon(IconNames.Happy)
    }
})
