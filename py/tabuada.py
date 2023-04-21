num = int(input("Digite qual tabuada você quer entre 1 e 10: "))

# Verifica se o número digitado está dentro do intervalo válido
if num < 1 or num > 10:
    print("Número inválido. Digite um número entre 1 e 10.")
else:
    # Loop for para gerar a tabuada
    for i in range(1, 11):
        print(num, "x", i, "=", num*i)
        
        

