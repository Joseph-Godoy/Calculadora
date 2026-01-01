//calculadora

let NumeroViejo = 0;
let operador = "";
let NumeroActual = 0;

// Borrar numeros

const borrar = document.querySelector(".BotonBorrar");

borrar.addEventListener("click", function() {
    texto.textContent = "";
    NumeroActual = 0;
    NumeroViejo = 0;
    operador = "";
})

// Botones display

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

// Sumar

const botonMas = document.querySelector(".botonMas");
const botonMenos = document.querySelector(".botonMenos");
const botonMultiplicacion = document.querySelector(".botonMultiplicacion");
const botonDivision = document.querySelector(".botonDivision"); 

botonMas.addEventListener("click", function() {
        NumeroViejo = texto.textContent;
        texto.textContent = "";
        operador = "+";
})

botonMenos.addEventListener("click", function() {
    NumeroViejo = texto.textContent;
    texto.textContent = "";
    operador = "-";
})

botonMultiplicacion.addEventListener("click", function() {
    NumeroViejo = texto.textContent;
    texto.textContent = "";
    operador = "*";
})

botonDivision.addEventListener("click", function() {
    NumeroViejo = texto.textContent;
    texto.textContent = "";
    operador = "/";
})

// Igual

const botonIgual = document.querySelector(".botonIgual");
botonIgual.addEventListener("click", function() {
    NumeroActual = texto.textContent;
    calcular();
});

//Calcular

function calcular() {
    if (operador === "+") {
        texto.textContent = parseFloat(NumeroViejo) + parseFloat(NumeroActual);
    } else if (operador === "-") {
        texto.textContent = parseFloat(NumeroViejo) - parseFloat(NumeroActual);
    } else if (operador === "*") {
        texto.textContent = parseFloat(NumeroViejo) * parseFloat(NumeroActual);
     } else if (operador === "/") {
        texto.textContent = parseFloat(NumeroViejo) / parseFloat(NumeroActual);
     }
}


