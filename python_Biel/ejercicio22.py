# Número secret
numero_secret = 42

# Demanem un número a l'usuari
numero = int(input("Endevina el número (entre 1 i 100): "))

# Repetim fins que l'encerti
while numero != numero_secret:

    if numero > numero_secret:
        print("Massa alt!")

    else:
        print("Massa baix!")

    numero = int(input("Torna-ho a provar: "))

# Quan l'encerta
print("Correcte")