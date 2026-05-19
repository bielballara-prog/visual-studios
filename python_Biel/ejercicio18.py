# Llista de números enters
numeros = [4, 12, 7, 25, 3, 18]

# La variable comença amb el primer número de la llista
mes_gran = numeros[0]

# Recorrem la llista
for numero in numeros:
    # Si trobem un número més gran, actualitzem la variable
    if numero > mes_gran:
        mes_gran = numero

# Mostrem el resultat
print("El número més gran és:", mes_gran)