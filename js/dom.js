
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
    
   
    var areatexto =document.querySelector('#areatexto');
        areatexto.classList.add("hiden");

});
//=======================================
