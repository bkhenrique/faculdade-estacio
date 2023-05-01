// console.log('Bem Vindo ao inicio de JavaScript!')//aviso comum
// console.error('esse e um suposto erro')//erro em vermelho
// console.warn('esse é um warn') //alerta em amarelo
// console.info('esse é um info') //esse é um informação




//objetos

const product = {
  name: 'camisa',
  price: 15.99,
  inStock: true,
  sizes: ['P', 'M', 'G'],
  'main color':'azul',
}
console.log(product.name);
console.log(product['name']);
console.log(product['main color']);
console.table(product);



// JSON JavaScritp Object Notation

// const dog = {
//   name:'Shark',
//   age: 10,
// }

// const json = JSON.stringify(dog) //converte para JSON
// console.log(json)

// const obj = JSON.parse(json) // convertendo json para usar quando vier de api  
// console.log(obj)
  

//
// let count =0;

// function add(){
//   let count =0;
//   count+=10;
// }
// add();
// add();
// add();
// add();
// add();

// console.log(count);


function addSquares(a,b){
  const square = (x) =>{  //arrow function
    return x * x;
  }
  let sqrA  =square(a);
  let sqrB =square(b);
  return sqrA + sqrB;
}
console.log('função arrow',addSquares(2,3));


// arrY CORES

let colors = ['blue','red','green'];

console.log(colors[1]); //seleciona o segundo iten, a contagem sempre começa do zero como primeiro iten

let lista =['blabla', ['xx','yy']];//arry

console.log(lista[1][1]);//acessar um array dentro de um array


//operação basica de array

let ingredientes =[
  'agua',
  'farinha',
  'ovo',
  'corante',
  'sal'
];

ingredientes.pop();//função pop remove o ultimo iten do array
ingredientes.shift();//função pop remove o primeiro iten do array

//ingredientes.push('cebola');//adicionar itens a lista usar push

console.log(`Total de ingredientes: ${ingredientes.length}`);// usar `` para concatenar

/////////////////////////////////////////////

let carros =['BMW','Ferrari','mercedes'];
let x =  1;
console.log('1. '+ carros[x]);
console.log(carros);

carros[1]='Audi';
console.log('1. '+ carros[x]);
console.log(carros);


carros.push('Volvo');
let y =3;
console.log('4. '+ carros[y]);

console.log(carros.length);
console.log(carros);

////////////////////////////////////////////////////////////

//para criar um array usa esse [] , para criar um objeto usa esse {}

let personagem ={
  nome:prompt('qual seu nome?'),//abre caixa para digitar
  idade:39,
  pais:'Brasil',
  olho:['castanho','azul'],
  caracteristicas:{
    forca:100,
    magia:120,
    stamina:99
  },
  tudocompleto: function(){
    return `${this.nome} ${this.idade} ${this.olho[0]}`;
  }
}
console.log(personagem.tudocompleto());

console.log(personagem.nome);
console.log(personagem.idade);
console.log(personagem.pais);
console.log(`${personagem.nome} tem ${personagem.idade} e nasceu no ${personagem.pais} `);
console.log(`${personagem.nome} tem ${personagem.caracteristicas.forca} magia`);
console.log(`${personagem.nome} tem ${personagem.olho[0]} olho`);

///============================================================================

//loop for

for(let n =0; n < 10; n++){//repete o log 10 vezes contando apartir do 0
  console.log('frase qualquer' +n);
}
console.warn('outra forma');

let cores= ['azul','preto','amarelo','vermelho','branco'];
for(let n =0; n < cores.length; n++){//repete o log a quantidade da lista vezes contando apartir do 0
  console.log(cores[n]);
}

console.warn('outra forma /i e in/');


for(let i in cores){//o i in vai ser a chave do arraycria de uma forma mais inteligente e curta o loop
  console.log(cores[i]);

}
console.warn('outra forma /of/');


for(let cor of cores){//cor é o objeto crado de 'of' todas as cores
  console.log(cor);

}

console.warn('loop while/enquanto/');

let numero =0;
while(numero <= 10){
 console.log(`O numero da vez é ${numero}`);
 numero++;//trocar o valor da variavel para o whie parar , se nao ele nao para nunca
}

//exercicio 
console.warn('mostrar uma lista 1 in');//"in" é um operador que verifica se uma propriedade específica existe em um objeto
let fruits = ['maça','uva','banana'];
for(let frutas in fruits){
  console.log(fruits[[frutas]]);
}

console.warn('mostrar uma lista 2 ');//"of" é um operador que percorre uma coleção de elementos, como um array, um mapa ou um conjunto, e retorna o valor de cada elemento da coleção.
let fruitas = ['maça','uva','banana'];
for(fru of fruitas){
  console.log(fru);
}
console.warn('contar ate 100');
let contagem = 0;
while(contagem<=100){
  console.log(`Numero ${contagem}`);
  contagem++;
}

console.warn('mostrar uma lista em uma string so com Join');
let feira = ['maça','uva','banana'];
 console.log(feira.join(','));//une a lista da array em uma string so 


 console.log(feira);

console.warn('Ordenação de array');
let feirafruta = ['maça','uva','banana'];
 feirafruta.sort();// ordem alfabetida
 feirafruta.reverse();// ordem alfabetida e usa o reverse para fazer decrescente


 console.log(feirafruta);