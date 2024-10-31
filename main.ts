input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    timer = randint(5, 15)
})
let timer = 0
if (timer == 0) {
    basic.showIcon(IconNames.Skull)
    music.ringTone(294)
}
basic.forever(function () {
    timer += -1
    basic.pause(1000)
})
