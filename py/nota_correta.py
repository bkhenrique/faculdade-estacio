while True:
    nota = float(input("Digite uma nota de 0 a 10: "))
    if nota >= 0 and nota <= 10:
        break
    else:
        print("Informe a nota correta, nota de 0 a 10.")
print("Nota correta:", nota)

