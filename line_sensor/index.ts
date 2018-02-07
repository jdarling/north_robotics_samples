const LINE_SENSOR = AnalogPin.P3
const LINE_SENSOR_THRESHOLD = 300

basic.forever(() => {
    if (pins.analogReadPin(LINE_SENSOR) > LINE_SENSOR_THRESHOLD) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
})
