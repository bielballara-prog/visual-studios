numerador = int(input("Entra el numerador: "))
denominador = int(input("Entra el denominador: "))

# Repetim mentre el denominador sigui 0
while denominador == 0:
    denominador = int(input("No pots dividir per 0. Entra un altre denominador: "))

divisio = numerador / denominador

print("El resultat de la divisió és: " + str(divisio))