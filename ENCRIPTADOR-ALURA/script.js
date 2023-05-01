//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"//
//La letra "i" es convertida para "imes"//
//La letra "a" es convertida para "ai"//
//La letra "o" es convertida para "ober"//
//La letra "u" es convertida para "ufat"//


var botonEencriptar = document.querySelector(".botonencriptar");
var botonDesencriptar = document.querySelector(".botondesencriptar");
var dibujo = document.querySelector(".imagendibujo");
var textoinicial = document.querySelector(".texto-a-encriptar");
var resultado = document.querySelector(".texto-final");


botonEencriptar.onclick = encriptar;
botonDesencriptar.onclick = encriptar;

function encriptar(){
    ocultar();
    var textoaencriptar = recuperartexto()
    resultado.textContent = encriptarTexto (textoaencriptar);

}

function desencriptar(){
    ocultar();
    var textoaencriptar = recuperartexto()
    resultado.textContent = desencriptarTexto (textoaencriptar);

}

function recuperartexto() {

    var textoaencriptar = document.querySelector(".texto-a-encriptar");
    return textoaencriptar.value;
}

function ocultar(){
    imagendibujo.classList.add("ocultar");
    textoinicial.classList.add("ocultar");
}

function encriptarTexto(textofinal) {
    var texto = textofinal;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e"){
                textofinal = textofinal + "enter"
        }
        else if (texto[i] =="a"){
            textofinal = textofinal + "ai"
        }
        else if (texto[i] =="i"){
            textofinal = textofinal + "imes"
        }
        else if (texto[i] =="o"){
            textofinal = textofinal + "ober"
        }
        else if (texto[i] =="u"){
            textofinal = textofinal + "ufat"
        }
        else {
            textofinal = textofinal + texto[i]
        }

    }
    return textofinal;
}

function deencriptarTexto(textofinal) {
    var texto = textofinal;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "enter"){
                textofinal = textofinal + "e"
        }
        else if (texto[i] =="ai"){
            textofinal = textofinal + "a"
        }
        else if (texto[i] =="imes"){
            textofinal = textofinal + "i"
        }
        else if (texto[i] =="ober"){
            textofinal = textofinal + "o"
        }
        else if (texto[i] =="ufat"){
            textofinal = textofinal + "u"
        }
        else {
            textofinal = textofinal + texto[i]
        }

    }
    return textofinal;
}

const botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-final").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("holis");
    })