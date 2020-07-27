let direction = 0
let ligne = 0
let liste = [0, 1, 2, 3, 4]
led.plot(0, 1)
led.plot(1, 0)
led.plot(2, 1)
led.plot(3, 2)
led.plot(4, 3)
basic.forever(function () {
    let colonne = 0
    basic.pause(500)
    led.unplot(colonne, ligne)
    ligne += direction
    if (ligne == 4) {
        direction = -1
    }
    if (ligne == 0) {
        direction = 1
    }
    led.plot(colonne, ligne)
})
