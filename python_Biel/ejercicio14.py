# Demanem les dades a l'usuari
edat = int(input("Edat: "))
nacionalitat = input("Tens nacionalitat espanyola? (Si/No): ")
partit = input("Pertanys a un partit polític? (Si/No): ")

# Comprovem si compleix tots els requisits
if edat >= 18 and nacionalitat == "Si" and partit == "Si":
    print("Ets elegible per ser President de la Generalitat!")
else:
    print("No pots ser President de la Generalitat")