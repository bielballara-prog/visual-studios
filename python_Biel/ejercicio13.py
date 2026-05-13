# Demanem el número a l'usuari i el convertim a un número decimal (float)
numero = float(input("Entra un número: "))

# Comprovem les tres possibilitats
if numero > 0:
    print("Aquest número és positiu!")
elif numero < 0:
    print("Aquest número és negatiu!")
else:
    print("Aquest número és zero!")