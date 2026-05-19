# Demanem quants números vol entrar l'usuari
quantitat = int(input("Quants números vols entrar?: "))

# Variable per guardar el total acumulat
acumulat = 0

# Bucle per demanar els números
for i in range(quantitat):
    numero = int(input(f"Entra el número {i}: "))
    acumulat = acumulat + numero

# Calculem la mitjana
mitjana = acumulat / quantitat

# Mostrem el resultat
print("La mitjana d'aquests números és:", mitjana)