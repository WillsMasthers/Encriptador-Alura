//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"//
//La letra "i" es convertida para "imes"//
//La letra "a" es convertida para "ai"//
//La letra "o" es convertida para "ober"//
//La letra "u" es convertida para "ufat"//


let encriptar = document.getElementById("encriptar");

encriptar.addEventListener('click', () => {
    let { value } = document.getElementById("textoAEncriptar");
    let data = value.toLowerCase().split('');
    let final = document.getElementById("textoEncriptado");
    let newArray = [];

//ENCRIPTAR

    data.map(item => {
        if (item === 'a') {
            newArray.push('ai');
        } else if (item === 'e') {
            newArray.push('enter');
        } else if (item === 'i') {
            newArray.push('imes');
        } else if (item === 'o') {
            newArray.push('ober');
        } else if (item === 'u') {
            newArray.push('ufat');
        } else {
            newArray.push(item);
        }
    });

    final.innerHTML = newArray.join('')
    document.getElementById("textoAEncriptar").value = '';
    document.getElementById("textoEncriptado").style.display = 'none';

});


//DESENCRIPTAR
let desencriptar = document.getElementById("desencriptar");

desencriptar.addEventListener('click', () => {
    let { value } = document.getElementById("textoAEncriptar");
    let data = value.toLowerCase()
    let result = data.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
    let final = document.getElementById("div-p");

    final.innerHTML = result
    document.getElementById("textoEncriptado").style.display = 'none';
    document.getElementById("textoFinal").style.display = 'flex'
    document.getElementById("textoAEncriptar").value = '';

});


//BOTON COPIAR

let copy = document.getElementById("copy")

copy.addEventListener('click', () => {
    let content = document.getElementById("textoFinal");

    let element = content.innerText;
    let inputelement = document.createElement('input');
    inputelement.setAttribute('value', element);
    document.body.appendChild(inputelement);
    inputelement.select();
    document.execCommand('copy');

    inputelement.parentNode.removeChild(inputelement);
    document.getElementById("textoFinal").style.display = 'none'
    document.getElementById("textoEncriptado").style.display = 'flex'


});