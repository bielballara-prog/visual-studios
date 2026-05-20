import turtle
import random

# Pantalla
screen = turtle.Screen()
screen.title("Cursa de tortugues")

# Tortugues
santino = turtle.Turtle()
biel = turtle.Turtle()
victor = turtle.Turtle()
jan = turtle.Turtle()

# Colors
santino.color("red")
biel.color("blue")
victor.color("green")
jan.color("orange")

# Posicions inicials
santino.penup(); santino.goto(-200, 100); santino.pendown()
biel.penup(); biel.goto(-200, 50); biel.pendown()
victor.penup(); victor.goto(-200, 0); victor.pendown()
jan.penup(); jan.goto(-200, -50); jan.pendown()

# Cursa
for i in range(100):
    santino.forward(random.randint(1, 5))
    biel.forward(random.randint(1, 5))
    victor.forward(random.randint(1, 5))
    jan.forward(random.randint(1, 5))

screen.mainloop()