import random
import time

# Comptadors
punts_jugador = 0
punts_ordinador = 0

# Nombre de tirades
tirades = 5
tirada_actual = 1

print("JOC: PEDRA, PAPER, TISORES")

while tirada_actual <= tirades:

    print("\n--- Tirada", tirada_actual, "---")

    # Demanem la tirada de l'usuari
    jugador = input("Escull pedra (p), paper (pa) o tisora (t): ")

    # Validem la resposta
    while jugador != "p" and jugador != "pa" and jugador != "t":
        jugador = input("Opció incorrecta. Torna-ho a provar: ")

    # Convertim les lletres en paraules
    if jugador == "p":
        jugador_text = "PEDRA"
    elif jugador == "pa":
        jugador_text = "PAPER"
    else:
        jugador_text = "TISORES"

    print("\nTu has escollit:", jugador_text)

    time.sleep(1)

    # Tirada aleatòria de l'ordinador
    opcions = ["p", "pa", "t"]
    ordinador = random.choice(opcions)

    # Convertim la tirada de l'ordinador
    if ordinador == "p":
        ordinador_text = "PEDRA"
    elif ordinador == "pa":
        ordinador_text = "PAPER"
    else:
        ordinador_text = "TISORES"

    print("L'ordinador ha escollit:", ordinador_text)

    time.sleep(1)

    # Comprovem qui guanya
    if jugador == ordinador:
        print("Empat! Aquesta tirada no compta.")
        continue

    elif (
        (jugador == "p" and ordinador == "t") or
        (jugador == "pa" and ordinador == "p") or
        (jugador == "t" and ordinador == "pa")
    ):
        print("Has guanyat aquesta tirada!")
        punts_jugador += 1

    else:
        print("L'ordinador guanya aquesta tirada!")
        punts_ordinador += 1

    # Passem a la següent tirada
    tirada_actual += 1

    # Mostrem puntuació
    print("\nMarcador:")
    print("Jugador:", punts_jugador)
    print("Ordinador:", punts_ordinador)

    time.sleep(2)

# Resultat final
print("\nFINAL DEL JOC")

if punts_jugador > punts_ordinador:
    print("Has guanyat la partida!")
elif punts_ordinador > punts_jugador:
    print("L'ordinador ha guanyat la partida!")
else:
    print("La partida ha acabat en empat!")