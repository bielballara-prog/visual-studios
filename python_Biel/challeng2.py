# 1. Demanem les dades a l'usuari
pes = float(input("Introdueix el teu pes en kg (ex: 75.5): "))
alcada = float(input("Introdueix la teva alçada en metres (ex: 1.75): "))

# 2. Calculem l'IMC
imc = pes / (alcada ** 2)

# 3. Mostrem el resultat amb dos decimals
print(f"El teu IMC és: {imc:.2f}")

# 4. Clasificació segons el Canal Salut
if imc < 18.5:
    print("Classificació: Pes baix")
elif 18.5 <= imc < 25:
    print("Classificació: Pes normal (saludable)")
elif 25 <= imc < 30:
    print("Classificació: Sobrepès")
else:
    print("Classificació: Obesitat")