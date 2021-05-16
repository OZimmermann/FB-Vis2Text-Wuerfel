# Variablen
augenzahl = 0

# Hauptprogramm
while True:
    # Endlosschleife
    if input.button_is_pressed(Button.A):
        augenzahl = randint(1, 6)
        if augenzahl == 1:
            basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
        if augenzahl == 2:
            basic.show_leds("""
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                """)
        if augenzahl == 3:
            basic.show_leds("""
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                """)
        if augenzahl == 4:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                """)
        if augenzahl == 5:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                """)
        if augenzahl == 6:
            basic.show_leds("""
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
                """)
        basic.pause(1000)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)