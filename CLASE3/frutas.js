let frutas = [
  "manzana",
  "naranja",
  "platano",
  "kiwi",
  "fresa",
  "manzana",
  "manzana",
  "naranja",
  "platano",
  "kiwi",
  "fresa",
  "manzana",
  "manzana",
  "naranja",
  "kiwi",
  "kiwi"];

let numManzana=0, numNaranja=0, numPlatano=0, numKiwi=0, numFresa=0;
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "manzana") {
        numManzana++;
    } else if (frutas[i] === "naranja") {
        numNaranja++;
    } else if (frutas[i] === "platano") {
        numPlatano++;
    } else if (frutas[i] === "kiwi") {
        numKiwi++;
    } else if (frutas[i] === "fresa") {
        numFresa++;
    }
}

console.log("Cantidad de frutas por tipo");
console.log("Manzana: " + numManzana);
console.log("Naranja: " + numNaranja);
console.log("Platano: " + numPlatano);
console.log("Kiwi: " + numKiwi);
console.log("Fresa: " + numFresa);

