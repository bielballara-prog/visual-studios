# Diccionari amb les pizzes i els seus preus
pizzes = {
    1: ("Margarita", 9.5),
    2: ("Pagès", 11),
    3: ("Hawaiana", 10.5),
    4: ("Barbacoa", 12),
    5: ("Vegetal", 11.5)
}

# Mostra el menú de pizzes
def mostrar_menu():
    print("MENÚ DE PIZZES")
    for numero, dades in pizzes.items():
        nom, preu = dades
        print(f"{numero}) {nom} - {preu}€")

# Comprova si la pizza és vàlida
def pizza_valida(opcio):
    return opcio in pizzes

# Retorna el preu de la pizza
def obtenir_preu(opcio):
    return pizzes[opcio][1]

# Programa principal
total = 0
continuar = "si"

while continuar == "si":

    mostrar_menu()

    opcio = int(input("Quina pizza vols? "))

    if pizza_valida(opcio):

        quantitat = int(input("Quantes pizzes d'aquest tipus vols? "))

        extra = input("Les vols amb extra de formatge? (si/no) ")

        preu = obtenir_preu(opcio)

        if extra == "si":
            preu += 1

        total += preu * quantitat

    else:
        print("Opció no vàlida")

    continuar = input("Vols una altra pizza? (si/no) ")

print(f"El preu total a pagar és {total}€")