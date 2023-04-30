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


var editor = CodeMirror.fromTextArea(document.getElementById("html-editor"), {
  lineNumbers: true,
  mode: "htmlmixed",
  theme: "monokai-dark"
});
