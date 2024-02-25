let botonEncriptar = document.querySelector(".boton-encriptar");
let botonDesencriptar = document.querySelector(".boton-desencriptar");
let muneco = document.querySelector(".contenedor-muneco");
let contenedorParrafo = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarElementos();
    let cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarElementos();
    let cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function ocultarElementos(){
    muneco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value;
}

function encriptarTexto(mensaje){
    let mensajeFinal = "";

    for(let i = 0; i < mensaje.length; i++ ){
        if(mensaje[i] =="a"){
            mensajeFinal = mensajeFinal + "ai"
        }
        else if(mensaje[i] =="e"){
            mensajeFinal = mensajeFinal + "enter"
        }
        else if(mensaje[i] =="i"){
            mensajeFinal = mensajeFinal + "imes"
        }
        else if(mensaje[i] =="o"){
            mensajeFinal = mensajeFinal + "ober"
        }
        else if(mensaje[i] =="u"){
            mensajeFinal = mensajeFinal + "ufat"
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i]
        }
    }
    return mensajeFinal;
}

function desencriptarTexto(mensaje){
    let mensajeFinal = "";

    for(let i = 0; i < mensaje.length; i++ ){
        if(mensaje[i] =="a"){
            mensajeFinal = mensajeFinal + "a"
            i+=1;
        }
        else if(mensaje[i] =="e"){
            mensajeFinal = mensajeFinal + "e"
            i+=4;
        }
        else if(mensaje[i] =="i"){
            mensajeFinal = mensajeFinal + "i"
            i+=3;
        }
        else if(mensaje[i] =="o"){
            mensajeFinal = mensajeFinal + "o"
            i+=3;
        }
        else if(mensaje[i] =="u"){
            mensajeFinal = mensajeFinal + "u"
            i+=3;
        }
        else{
            mensajeFinal = mensajeFinal + mensaje[i]
        }
    }
    return mensajeFinal;
}

function copiar(){
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
}


const botonCopiar = document.querySelector(".boton-copiar");

botonCopiar.addEventListener("click", copiar)



