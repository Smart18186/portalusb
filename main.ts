serial.redirectToUSB()
basic.showIcon(IconNames.Yes)
loops.everyInterval(500, function () {
    basic.clearScreen()
    serial.writeNumber(0)
})
