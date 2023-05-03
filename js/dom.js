
//manipulação de DOM
var botaoManipular = document.querySelector(".show-modal");

botaoManipular.addEventListener("click",function(){
        var areatexto =document.querySelector('#areatexto');
        areatexto.classList.remove("hiden");
});


var addComent = document.querySelector('#add-comentario');

addComent.addEventListener('click', function(){
    var h2Titulo = document.querySelector('.h2-titulo'); 
    var areaComentario = document.querySelector('#area-comentario');
    h2Titulo.textContent = areaComentario.value;
    
    console.log('teste:', areaComentario.textContent);
    console.log('teste:', areaComentario.value);
    
//     let addNovoElemento = document.querySelector('#adicionar-element');
   let  addNovoElemento = document.createElement('button');
    addNovoElemento.textContent = 'Foi criado um botao';
    console.log(addNovoElemento);
    
    let novoElementoB = document.querySelector('.area-texte-2');
        
    novoElementoB.appendChild(addNovoElemento);

    var ultimoFilho = novoElementoB.lastChild;
    novoElementoB.insertBefore(addNovoElemento, ultimoFilho);

   var areatexto =document.querySelector('#areatexto');
   areatexto.classList.add("hiden");
});
//=======================================
// 
// 
// 
// 
// addNovoElemento.append(addNovoElemento);
var mouse = document.querySelector('#mais');
mouse.addEventListener('mouseenter', function(event){
        mouse.classList.add('grande');
});
mouse.addEventListener('mouseleave', function(event){
        mouse.classList.remove('grande');
});



var addEle = document.querySelector('#mais');
addEle.addEventListener('click', function(){
        let  addNovoElemento = document.createElement('button');
        addNovoElemento.textContent = 'Foi criado um botao';
        console.log(addNovoElemento);
        
        let novoElementoB = document.querySelector('.area-texte-2');
            
        novoElementoB.appendChild(addNovoElemento);
    
        var ultimoFilho = novoElementoB.lastChild;
        novoElementoB.insertBefore(addNovoElemento, ultimoFilho);
});


///// eventos de teclado adicionando uma lista com a tecla enter

//elemento
const input = document.querySelector('#inputLista');
const lista = document.querySelector('ol');

///Função
function handleKeyUp(e){
        if(e.key === 'Enter'){
                const newLi =document.createElement('li');
                newLi.innerHTML = input.value;
                lista.appendChild(newLi);

                input.value = '';

        }

};

/// Eventos
input.addEventListener('keyup', handleKeyUp);