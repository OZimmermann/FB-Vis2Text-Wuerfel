## Variablen
augenzahl = 0
spiel = "würfeln"
## Unterprogramme für Pacman 
def herzschlag(num: number):
    """
    Pacmans Herz schlägt 
    num: Anzahl Herzschläge
    """
    for index in range(num):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(100)
def pacmanlinks():
    """
    Pacman läuft fressend nach links
    """
    while not (input.button_is_pressed(Button.B)):
        basic.show_leds("""
            # . # # .
            . # . # #
            . . # # #
            . # # # #
            # . # # .
            """)
        basic.pause(100)
        basic.show_leds("""
            . . # # .
            # # . # #
            # # # # #
            # # # # #
            . . # # .
            """)
        basic.pause(100)
def pacmanrechts():
    """ 
        Pacman läuft fressend nach rechts
    """
    while not (input.button_is_pressed(Button.A)):
        basic.show_leds("""
            . # # . #
            # # . # .
            # # # . .
            # # # # .
            . # # . #
            """)
        basic.pause(100)
        basic.show_leds("""
            . # # . .
            # # . # #
            # # # # #
            # # # # #
            . # # . .
            """)
        basic.pause(100)
    
## Hauptprogramm
# Endlosschleife
while True:
    while not (input.button_is_pressed(Button.AB)):
        # Abfrage des gewählten Spiels
        if spiel == "würfeln": 
            # Abfrage des Knopfdrucks A
            if input.button_is_pressed(Button.A):
                # Zufallszahl zwischen 1..6 bestimmen
                augenzahl = randint(1, 6)
                # die Zufallszahl ist 1 => Anzeigen der Augenzahl 1
                if augenzahl == 1:
                    basic.show_leds("""
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        """)
                # die Zufallszahl ist 2 => Anzeigen der Augenzahl 2
                if augenzahl == 2:
                    basic.show_leds("""
                        . . . . .
                        . # . . .
                        . . . . .
                        . . . # .
                        . . . . .
                        """)
                # die Zufallszahl ist 3 => Anzeigen der Augenzahl 3
                if augenzahl == 3:
                    basic.show_leds("""
                        . . . . .
                        . # . . .
                        . . # . .
                        . . . # .
                        . . . . .
                        """)
                # die Zufallszahl ist 4 => Anzeigen der Augenzahl 4
                if augenzahl == 4:
                    basic.show_leds("""
                        . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
                        """)
                # die Zufallszahl ist 5 => Anzeigen der Augenzahl 5
                if augenzahl == 5:
                    basic.show_leds("""
                        . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
                        """)
                # die Zufallszahl ist 6 => Anzeigen der Augenzahl 6
                if augenzahl == 6:
                    basic.show_leds("""
                        . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . . . .
                        """)
                # Kurze Pause, damit Augenzahl angezeigt bleibt
                basic.pause(1000)
                # Bildschirm löschen
                basic.show_leds("""
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    """)
        else:   # gewähltes Spiel ist Pacman
            if input.button_is_pressed(Button.A):
                pacmanlinks()
            elif input.button_is_pressed(Button.B):
                pacmanrechts()
    if spiel == "würfeln":
        spiel = "pacman"
        herzschlag (1)
        basic.clear_screen()

    else:
        spiel = "würfeln"
        herzschlag(1)
        basic.clear_screen()
