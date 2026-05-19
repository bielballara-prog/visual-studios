# Funció per calcular l'àrea d'un triangle
def area_triangle():

    # Demanem la base i l'alçada
    base = float(input("Introdueix la base del triangle: "))
    alcada = float(input("Introdueix l'alçada del triangle: "))

    # Calculem l'àrea
    area = (base * alcada) / 2

    # Mostrem el resultat
    print("L'àrea del triangle és:", area)

# Cridem la funció
area_triangle()