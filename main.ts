//  Variablen
let augenzahl = 0
// # Hauptprogramm
//  Endlosschleife
while (true) {
    //  Abfrage des Knopfdrucks A
    if (input.buttonIsPressed(Button.A)) {
        //  Zufallszahl zwischen 1..6 bestimmen
        augenzahl = randint(1, 6)
        //  die Zufallszahl ist 1 => Anzeigen der Augenzahl 1
        if (augenzahl == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        
        //  die Zufallszahl ist 2 => Anzeigen der Augenzahl 2
        if (augenzahl == 2) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
        }
        
        //  die Zufallszahl ist 3 => Anzeigen der Augenzahl 3
        if (augenzahl == 3) {
            basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
        }
        
        //  die Zufallszahl ist 4 => Anzeigen der Augenzahl 4
        if (augenzahl == 4) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
        }
        
        //  die Zufallszahl ist 5 => Anzeigen der Augenzahl 5
        if (augenzahl == 5) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
        }
        
        //  die Zufallszahl ist 6 => Anzeigen der Augenzahl 6
        if (augenzahl == 6) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                `)
        }
        
        //  Kurze Pause, damit Augenzahl angezeigt bleibt
        basic.pause(1000)
        //  Bildschirm löschen
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    
}
