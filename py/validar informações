nome = ''

salario = 0
sexo = ''
estado_civil = ''


while True:
    nome = input("Digite seu nome: ")
    if len(nome) > 3 :
        break
    print("Nome inválido. Digite um nome com mais de 3 caracteres.")

while True:
    idade = input("Digite sua idade: ")
    while idade is None: 
      print("campo vazio, digite idade obrigatorio, digite sua idade ")
      idade = input("Digite sua idade: ")
      continue
      
    if type(idade) is int and idade >= 0  or idade <= 150:
        break
    print("Idade inválida. Digite uma idade entre 0 e 150 anos.")

while True:
    salario = float(input("Digite seu salário: "))
    if salario > 0:
        break
    print("Salário inválido. Digite um valor maior que zero.")

while True:
    sexo = input("Digite seu sexo (f/m): ")
    if sexo == 'f' or sexo == 'm':
        break
    print("Sexo inválido. Digite 'f' para feminino ou 'm' para masculino.")

while True:
    estado_civil = input("Digite seu estado civil (s/c/v/d): ")
    if estado_civil == 's' or estado_civil == 'c' or estado_civil == 'v' or estado_civil == 'd':
        break
    print("Estado civil inválido. Digite 's' para solteiro, 'c' para casado, 'v' para viúvo ou 'd' para divorciado.")
print("Cadastro realizado com sucesso!" )
print("-----------------" )
print(" nome: "+nome,"\n Salario:R$" + str(salario) , "\n Idade:"+ str(idade) , "\n Sexo:"+ sexo , "\n Estado Civil:"+ estado_civil )
print("-----------------" )

