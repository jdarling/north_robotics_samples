input.onButtonPressed(Button.B, () => {
    basic.showIcon(IconNames.Surprised)
    pins.servoWritePin(AnalogPin.P0, 170)
    pins.servoWritePin(AnalogPin.P1, 170)
    pins.servoWritePin(AnalogPin.P2, 170)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, () => {
    basic.showIcon(IconNames.Surprised)
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Surprised)
    pins.servoWritePin(AnalogPin.P0, 10)
    pins.servoWritePin(AnalogPin.P1, 10)
    pins.servoWritePin(AnalogPin.P2, 10)
    basic.showIcon(IconNames.Yes)
})
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
basic.showIcon(IconNames.Yes)
