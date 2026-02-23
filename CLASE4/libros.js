let libros=[];


const agregarLibro=(titulo)=>{
    libros.push(titulo);
    
    return `Libro "${titulo}" agregado a la lista.`;
}

const mostrarLibros=()=>{
    let listaLibros = "";
    for(let i=0; i<libros.length; i++){
        listaLibros += `Libro ${i+1}: ${libros[i]}\n`;
    }
    return listaLibros;
}


console.log(agregarLibro("Cien Años de Soledad"));
console.log(agregarLibro("Don Quijote de la Mancha"));
console.log(agregarLibro("El Señor de los Anillos"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Lista de libros:");
console.log(mostrarLibros());

console.log("-----------------------------");
console.log("-----------------------------");

console.log(agregarLibro("El Principito"));
console.log(agregarLibro("La cenicienta"));
console.log("-----------------------------");
console.log("-----------------------------");
console.log("Lista de libros actualizada:");
console.log(mostrarLibros());