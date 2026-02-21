//Funcion normal
function funcion_normal(a, b){
    return a + b;
}

//Funcion como variable
let funcion_como_variable = function(a, b){
    return a + b;
}

//funciones flecha

let funcion_flecha=(a, b) => {
    return a + b;
}

//funciones con una sola linea de codigo simplificada
let funcion_flecha_simplificada=(a, b) => a + b;

//funcion con un solo parametro
let funcion_un_parametro = a => a * a;


console.log(funcion_normal(2,3)); //5
console.log(funcion_como_variable(2,3)); //5
console.log(funcion_flecha(2,3)); //5
console.log(funcion_flecha_simplificada(2,3)); //5