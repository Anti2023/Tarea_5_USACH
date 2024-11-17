notas=[6,8,9,2,5,10]

function sumaNotas() {
    let suma=0; //variable que acumula la suma de las notas
    for(let i=0; i<notas.length; i++) { //recorre el arreglo notas, siempre que i sea menor que 6
        suma=suma + notas[i]; //esto hace que suma vaya sumando las notas
    }
    return suma;

}

console.log("La suma de las notas es:", sumaNotas());

function promNotas() {
    const suma=sumaNotas(); // recibe la función que suma las notas
    const cantidadNotas=notas.length; // recibe la longitud del arreglo notas
    const prom=suma/cantidadNotas; //almacena resultado de la división entre suma y la cantidad de notas
    return prom.toFixed(1) // redondea a un decimal

}

console.log("El promedio de las notas es:", promNotas());



