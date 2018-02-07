const SONAR_TRIGGER = DigitalPin.P1
const SONAR_ECHO = DigitalPin.P2
const SONAR_UNIT = PingUnit.Inches
const SONAR_MIN_DISTANCE = 5

let distance = 0
serial.writeLine("Ok")
basic.forever(() => {
    distance = sonar.ping(
      SONAR_TRIGGER,
      SONAR_ECHO,
      SONAR_UNIT
    )
    serial.writeNumber(distance)
    serial.writeLine("")
    if (distance < SONAR_MIN_DISTANCE) {
        basic.showIcon(IconNames.Confused)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
