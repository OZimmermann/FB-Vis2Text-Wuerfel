let augenzahl = 0
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        augenzahl = randint(1, 6)
        if (augenzahl == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        
        if (augenzahl == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        }
        
        if (augenzahl == 3) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
        }
        
        if (augenzahl == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        }
        
        if (augenzahl == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        
        if (augenzahl == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
        
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    
}
