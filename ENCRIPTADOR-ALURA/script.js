

var botonEncriptar = document.querySelector(".Encriptar");
var botonDesencriptar = document.querySelector(".Desencriptar");
var dibujo = document.querySelector(".dibujo-nene");
var textoinicial = document.querySelector(".texto-a-encriptar");
var ingreseTexto = document.querySelector(".ingrese-texto");
var textoencriptado = document.querySelector(".texto-encriptado");
var resultado = document.querySelector(".textoResultado");
var botonCopiar = document.querySelector(".botonCopiar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function ocultar() {
    dibujo.classList.add("ocultar");
    textoencriptado.classList.add("ocultar");
    ingreseTexto.classList.add("ocultar");
}

function encriptar() 
{
    ocultar();
    var textoaencriptar = recuperartexto();
    resultado.textContent = encriptarTexto(textoaencriptar);
    botonCopiar.classList.remove("ocultar");
}

function desencriptar() 
{
    ocultar();
    var textoadencriptar = recuperartexto()
    resultado.textContent = desencriptarTexto(textoadencriptar);
}

function recuperartexto() 
{
    var textoaencriptar = document.querySelector(".texto-a-encriptar");
    return textoaencriptar.value;
}

function encriptarTexto(textofinal) 
{
    var texto = textofinal;
    var textofinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "ufat"
        }
        else {
            textofinal = textofinal + texto[i]
        }
    }
    console.log(textofinal);
    return textofinal;
}

function desencriptarTexto(textofinal) 
{
    var texto = textofinal;
    var textofinal = "";
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e") {
            textofinal = textofinal + "e"
            i = i +4;
        }
        else if (texto[i] == "a") {
            textofinal = textofinal + "a"
            i = i +1;
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "i"
            i = i +3;
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "o"
            i = i +3;
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "u"
            i = i +3;
        }
        else {
            textofinal = textofinal + texto[i]
        }
    }
    //console.log(textofinal);
    return textofinal;
}

function copiar()
{
    var p=document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(p);
}