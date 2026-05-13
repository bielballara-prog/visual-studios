# 1. Demana a l'usuari si és professor, alumne o d'administració.
rol = input("Quin és el teu rol? (professor, alumne, administracio): ").lower()

# 2. Si és professor diga-li que pot tenir les claus.
if rol == "professor":
    print("Pots tenir les claus.")

# 3. Si no és professor però és d'administració, també li hem de dir que pot tenir les claus.
elif rol == "administracio":
    print("Pots tenir les claus.")

# 4. Si no, si és alumne, li hem de dir que no pot tenir les claus.
elif rol == "alumne":
    print("No pots tenir les claus.")

# 5. Si no és cap d'aquests casos li hem de dir que només pot ser un d'aquests rols.
else:
    print("Error: Només pot ser un d'aquests rols (professor, alumne o administracio).")