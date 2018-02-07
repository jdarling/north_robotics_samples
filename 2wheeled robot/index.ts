const MOTOR_RIGHT_0 = AnalogPin.P13
const MOTOR_RIGHT_1 = AnalogPin.P14
const MOTOR_LEFT_0 = AnalogPin.P15
const MOTOR_LEFT_1 = AnalogPin.P16


const SONAR_SERVO_CONTROL_PIN = AnalogPin.P2
const SONAR_TRIGGER = DigitalPin.P0
const SONAR_ECHO = DigitalPin.P1
const SONAR_UNIT = PingUnit.Inches
const SONAR_MIN_DISTANCE = 5


const LINE_SENSOR = AnalogPin.P3

let running = 0
let distance = 0

function leftForward(speed = 512) {
    // Left motors forward
    pins.analogWritePin(MOTOR_LEFT_0, 0)
    pins.analogWritePin(MOTOR_LEFT_1, speed)
    //pins.digitalWritePin(MOTOR_LEFT_0, 0)
    //pins.digitalWritePin(MOTOR_LEFT_1, 1)
}

function rightForward(speed = 512) {
    // Right motors forward
    pins.analogWritePin(MOTOR_RIGHT_0, 0)
    pins.analogWritePin(MOTOR_RIGHT_1, speed)
    //pins.digitalWritePin(MOTOR_RIGHT_0, 0)
    //pins.digitalWritePin(MOTOR_RIGHT_1, 1)
}

function leftReverse(speed = 512) {
    // Left motors reverse
    pins.analogWritePin(MOTOR_LEFT_1, 0)
    pins.analogWritePin(MOTOR_LEFT_0, speed)
    //pins.digitalWritePin(MOTOR_LEFT_1, 0)
    //pins.digitalWritePin(MOTOR_LEFT_0, 1)
}

function rightReverse(speed = 512) {
    // Right motors reverse
    pins.analogWritePin(MOTOR_RIGHT_1, 0)
    pins.analogWritePin(MOTOR_RIGHT_0, speed)
    //pins.digitalWritePin(MOTOR_RIGHT_1, 0)
    //pins.digitalWritePin(MOTOR_RIGHT_0, 1)
}

function leftStop() {
    pins.analogWritePin(MOTOR_LEFT_0, 0)
    pins.analogWritePin(MOTOR_LEFT_1, 0)
    //pins.digitalWritePin(MOTOR_LEFT_0, 0)
    //pins.digitalWritePin(MOTOR_LEFT_1, 0)
}

function rightStop() {
    pins.analogWritePin(MOTOR_RIGHT_0, 0)
    pins.analogWritePin(MOTOR_RIGHT_1, 0)
    //pins.digitalWritePin(MOTOR_RIGHT_0, 0)
    //pins.digitalWritePin(MOTOR_RIGHT_1, 0)
}

function reverse(speed = 512) {
    leftReverse(speed)
    rightReverse(speed)
}
function left(leftSpeed = 512, rightSpeed = 512) {
    leftReverse(leftSpeed)
    rightForward(rightSpeed)
}
function right(leftSpeed = 512, rightSpeed = 512) {
    leftForward(leftSpeed)
    rightReverse(rightSpeed)
}
function stop() {
    leftStop()
    rightStop()
}
function forward(speed = 512) {
    leftForward(speed)
    rightForward(speed)
}

// Mode switch
input.onButtonPressed(Button.A, () => {
    if (running == 0) {
        basic.showIcon(IconNames.Yes)
        running = 4
    } else {
        running = 0
    }
})


pins.servoWritePin(SONAR_SERVO_CONTROL_PIN, 90)

// Control loop
basic.forever(() => {
    distance = sonar.ping(
        SONAR_TRIGGER,
        SONAR_ECHO,
        SONAR_UNIT
    )
    if (running == 1) {
        if (distance < SONAR_MIN_DISTANCE) {
            right()
            basic.showIcon(IconNames.Angry)
        } else {
            forward()
            basic.showIcon(IconNames.Happy)
        }
    } else {
        if (running == 0) {
            stop()
            basic.showIcon(IconNames.Cow)
        } else {
            running = running - 1
            basic.showNumber(running)
            basic.pause(1000)
        }
    }
})
