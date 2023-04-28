console.log('Bem Vindo ao inicio de JavaScript!')//aviso comum
console.error('esse e um suposto erro')//erro em vermelho
console.warn('esse é um warn') //alerta em amarelo
console.info('esse é um info') //esse é um informação

// variaveis
var htmlEditor = document.getElementById('html-editor');

function updatePreview() {
  var preview = document.getElementById('preview');
  preview.innerHTML = htmlEditor.value;
}

htmlEditor.addEventListener('input', function() {
  updatePreview();
});

autosize(document.querySelectorAll('.autosize'));


