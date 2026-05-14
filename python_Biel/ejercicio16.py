# Demanem una paraula a l'usuari
paraula = input("Escriu una paraula: ")

# Obtenim la lletra inicial i la final
# En Python, l'índex -1 sempre es refereix a l'últim element
inicial = paraula[0]
final = paraula[-1]

# Mostrem el resultat combinat tal com surt a l'exemple
print(f"{inicial}{final}")