# Nom que ha d'endevinar l'usuari
nom_secret = "Biel"

# Demanem el primer intent
intent = input("Endevina el meu nom: ")

# Comptador d'intents
intents = 1

# Mentre no l'encerti
while intent != nom_secret:
    intent = input("No és aquest, prova'n un altre: ")
    intents = intents + 1

# Quan l'encerta
print("Sí, l'has encertat!")
print("Has necessitat", intents, "intents.")