import turtle
import random

# Pantalla
screen = turtle.Screen()
screen.title("Cursa de tortugues")

# Tortugues
maria = turtle.Turtle()
pere = turtle.Turtle()
laura = turtle.Turtle()
joan = turtle.Turtle()

# Colors
maria.color("red")
pere.color("blue")
laura.color("green")
joan.color("orange")

# Posicions inicials
maria.penup(); maria.goto(-200, 100); maria.pendown()
pere.penup(); pere.goto(-200, 50); pere.pendown()
laura.penup(); laura.goto(-200, 0); laura.pendown()
joan.penup(); joan.goto(-200, -50); joan.pendown()

# Cursa
for i in range(100):
    maria.forward(random.randint(1, 5))
    pere.forward(random.randint(1, 5))
    laura.forward(random.randint(1, 5))
    joan.forward(random.randint(1, 5))

screen.mainloop()