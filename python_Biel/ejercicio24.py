import random

# Funció que simula un llançament de moneda
def llancar_moneda():

    opcions = ["cara", "creu"]

    resultat = random.choice(opcions)

    print("Ha sortit:", resultat)

# Cridem la funció
llancar_moneda()