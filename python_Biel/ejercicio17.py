# 1. Demanem la paraula i la posició (recorda convertir la posició a enter)
paraula = input("Introdueix una paraula: ")
posicio = int(input("Introdueix la posició d'una lletra: "))

# 2. Creem la nova paraula fent "slicing"
# Agafem des de l'inici fins a la posició (sense incloure-la)
# Afegim el "_"
# Agafem des de la posició + 1 fins al final
nova_paraula = paraula[:posicio] + "_" + paraula[posicio+1:]

# 3. Mostrem el resultat
print(f"\n{nova_paraula}")