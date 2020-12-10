let ondo = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    ondo = input.temperature()
})
input.onButtonPressed(Button.B, function () {
    if (30 < input.temperature()) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("G B G B G B G B ", 140)
    } else {
        if (20 < input.temperature()) {
            basic.showIcon(IconNames.Heart)
            music.playMelody("C5 A B G A F G E ", 140)
        } else {
            if (15 < input.temperature()) {
                basic.showIcon(IconNames.Asleep)
                music.playMelody("F E G E A G B C5 ", 140)
            } else {
                if (5 < input.temperature()) {
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
                        `)
                    music.playMelody("F - F - F - F - ", 160)
                } else {
                    if (-60 < input.temperature()) {
                        basic.showIcon(IconNames.No)
                        music.playMelody("G B - G B - G B ", 120)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
