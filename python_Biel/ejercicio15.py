# Demanem el nom i el cognom a l'usuari
nom = input("Nom: ")
cognom = input("Cognom: ")

# Extraiem la primera lletra de cada cadena (posició 0)
inicial_nom = nom[0]
inicial_cognom = cognom[0]

# Mostrem les inicials separades per un punt
# Fem servir .upper() per assegurar-nos que surtin en majúscules com a l'exemple
print(f"{inicial_nom.upper()}.{inicial_cognom.upper()}.")