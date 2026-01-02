import {conversionNotacion} from './notacionPolacaInversa.js';

// Borrar numeros

const borrar = document.querySelector(".BotonBorrar");

borrar.addEventListener("click", function() {
    texto.textContent = "";
})

// Variables de los botones

const texto = document.querySelector(".display");

const boton7 = document.querySelector(".boton7");
const boton8 = document.querySelector(".boton8");
const boton9 = document.querySelector(".boton9");
const boton4 = document.querySelector(".boton4");
const boton5 = document.querySelector(".boton5");
const boton6 = document.querySelector(".boton6");
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const boton0 = document.querySelector(".boton0");
const botonPunto = document.querySelector(".botonPunto");

const botonMas = document.querySelector(".botonMas");
const botonMenos = document.querySelector(".botonMenos");
const botonMultiplicacion = document.querySelector(".botonMultiplicacion");
const botonDivision = document.querySelector(".botonDivision"); 

const botonIgual = document.querySelector(".botonIgual");

// Botones de numeros

boton7.addEventListener("click", function() {
    texto.textContent += boton7.textContent;
});
boton8.addEventListener("click", function() {
    texto.textContent += boton8.textContent;
});
boton9.addEventListener("click", function() {
    texto.textContent += boton9.textContent;
});
boton4.addEventListener("click", function() {
    texto.textContent += boton4.textContent;
});
boton5.addEventListener("click", function() {
    texto.textContent += boton5.textContent;
});
boton6.addEventListener("click", function() {
    texto.textContent += boton6.textContent;
});
boton1.addEventListener("click", function() {
    texto.textContent += boton1.textContent;
});
boton2.addEventListener("click", function() {
    texto.textContent += boton2.textContent;
});
boton3.addEventListener("click", function() {
    texto.textContent += boton3.textContent;
});
boton0.addEventListener("click", function() {
    texto.textContent += boton0.textContent;
});
botonPunto.addEventListener("click", function() {
    texto.textContent += botonPunto.textContent;
});

// Botones de operadores

botonMas.addEventListener("click", function() {
    texto.textContent += botonMas.textContent
})

botonMenos.addEventListener("click", function() {
    texto.textContent += botonMenos.textContent
})

botonMultiplicacion.addEventListener("click", function() {
    texto.textContent += botonMultiplicacion.textContent
})

botonDivision.addEventListener("click", function() {
    texto.textContent += botonDivision.textContent
})

// Igual

botonIgual.addEventListener("click", function() {
    let calculo = conversionNotacion(texto.textContent);
    texto.textContent = calculo
});


