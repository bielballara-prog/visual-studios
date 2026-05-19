def celsius_a_fahrenheit(c):
    return (1.8 * c) + 32


def fahrenheit_a_celsius(f):
    return (f - 32) / 1.8


# Programa principal
print("Quina conversió vols fer?")
print("1 - Celsius a Fahrenheit")
print("2 - Fahrenheit a Celsius")

opcio = input("Introdueix 1 o 2: ")

if opcio == "1":
    c = float(input("Introdueix la temperatura en ºC: "))
    resultat = celsius_a_fahrenheit(c)
    print("Resultat en ºF:", resultat)

elif opcio == "2":
    f = float(input("Introdueix la temperatura en ºF: "))
    resultat = fahrenheit_a_celsius(f)
    print("Resultat en ºC:", resultat)

else:
    print("Opció no vàlida")