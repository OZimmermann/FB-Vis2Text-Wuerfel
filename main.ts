// # Variablen
let augenzahl = 0
let spiel = "würfeln"
// # Unterprogramme für Pacman 
function herzschlag(num: number) {
    /** 
    Pacmans Herz schlägt 
    num: Anzahl Herzschläge
    
 */
    for (let index = 0; index < num; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
}

function pacmanlinks() {
    /** Pacman läuft fressend nach links */
    while (!input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # . # # .
            . # . # #
            . . # # #
            . # # # #
            # . # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # # .
            # # . # #
            # # # # #
            # # # # #
            . . # # .
            `)
        basic.pause(100)
    }
}

function pacmanrechts() {
    /** Pacman läuft fressend nach rechts */
    while (!input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # # . #
            # # . # .
            # # # . .
            # # # # .
            . # # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . # # . .
            # # . # #
            # # # # #
            # # # # #
            . # # . .
            `)
        basic.pause(100)
    }
}

// # Hauptprogramm
//  Endlosschleife
while (true) {
    while (!input.buttonIsPressed(Button.AB)) {
        //  Abfrage des gewählten Spiels
        if (spiel == "würfeln") {
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
            
        } else if (input.buttonIsPressed(Button.A)) {
            pacmanlinks()
        } else if (input.buttonIsPressed(Button.B)) {
            pacmanrechts()
        }
        
    }
    if (spiel == "würfeln") {
        spiel = "pacman"
    } else {
        spiel = "würfeln"
    }
    
}
