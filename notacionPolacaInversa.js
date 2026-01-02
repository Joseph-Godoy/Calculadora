
export function conversionNotacion(Expresion) {
   let pilaFinal = [];
   let pilaOperadores = [];
   let precedencia = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    let tokens = Expresion.match(/\d+|[+\-*/]/g);

    for (let elemento of tokens) {
        if (!isNaN(elemento)) {
            pilaFinal.push(elemento);
        } else {
            while (pilaOperadores.length > 0 && precedencia[pilaOperadores[pilaOperadores.length - 1]] >= precedencia[elemento]) {
                pilaFinal.push(pilaOperadores.pop());
            }
            pilaOperadores.push(elemento);
        }
    }
    while (pilaOperadores.length > 0) {
        pilaFinal.push(pilaOperadores.pop())
    }
    console.log(pilaFinal)
    return calculoNotacion(pilaFinal);
}

function calculoNotacion(Expresion) {
    let pilaCalculo = []

    for (let elemento of Expresion) {
        if (!isNaN(elemento)){
            pilaCalculo.push(elemento);
            console.log(pilaCalculo)
        } else {
            let derecha = parseFloat(pilaCalculo.pop());
            let izquierda = parseFloat(pilaCalculo.pop());
            if (elemento == "+") {
                pilaCalculo.push(izquierda + derecha);
            } else if (elemento == "-") {
                pilaCalculo.push(izquierda - derecha);
            } else if (elemento == "*") {
                pilaCalculo.push(izquierda * derecha);
            } else if (elemento == "/") {
                if (derecha == 0) {
                    return "MATH ERROR"
                }
                pilaCalculo.push(izquierda / derecha);
            }
        }
    }
    return pilaCalculo[0].toString();
}
