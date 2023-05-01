
var botaoManipular = document.querySelector(".maipular-texto");

botaoManipular.addEventListener("click",function(event){
    if(event){
        var esconde =document.querySelector('#areatexto');
        esconde.classList.remove("hiden");
        var dom =document.querySelector('.h2-manipulado');
        dom.textContent = prompt('Digite seu texto:');
    };

});
