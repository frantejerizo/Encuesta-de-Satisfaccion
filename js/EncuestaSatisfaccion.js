const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10
];

const tamañoArray = 10; // Define el tamaño del array
const calificacionRepetida = new Array(tamañoArray).fill(0); // Asigno el valor 0 a todos los elementos del array

let suma = 0,
  prom,
  satisfechos = 0,
  insatisfechos = 0;
masRepetida = 0;
nota = 0;

// console.log(respuestas.length);

for (i = 0; i < respuestas.length; i++) {
  suma = suma + respuestas[i];
  // console.log(suma);
  if (respuestas[i] >= 7) {
    satisfechos++;
  }
  if (respuestas[i] <= 4) {
    insatisfechos++;
  }

/* este switch es para ver el num q se repitió mas veces,
dependiendo la nota se guarda en un lugar del array
*/
  switch (respuestas[i]) {
    case 1:
      calificacionRepetida[0] = calificacionRepetida[0] + 1;
      break;
    case 2:
      calificacionRepetida[1] = calificacionRepetida[1] + 1;
      break;
    case 3:
      calificacionRepetida[2] = calificacionRepetida[2] + 1;
      break;
    case 4:
      calificacionRepetida[3] = calificacionRepetida[3] + 1;
      break;
    case 5:
      calificacionRepetida[4] = calificacionRepetida[4] + 1;
      break;
    case 6:
      calificacionRepetida[5] = calificacionRepetida[5] + 1;
      break;
    case 7:
      calificacionRepetida[6] = calificacionRepetida[6] + 1;
      break;
    case 8:
      calificacionRepetida[7] = calificacionRepetida[7] + 1;
      break;
    case 9:
      calificacionRepetida[8] = calificacionRepetida[8] + 1;
      break;
    case 10:
      calificacionRepetida[9] = calificacionRepetida[9] + 1;
      break;
  }
}

prom = suma / respuestas.length;
// console.log(prom);

/* Recorro todo el array de notas para ver cual fue la nota mas repetida, 
si la nota 4 se repite 6 veces "calificacionRepetida[3] = 6", x lo tanto "masRepetida = 6"
y "nota" es igual a 3. Asi q a la hora de mostrar la nota mas repetida
tendra que ser "nota + 1".
*/
for (i = 0; i < calificacionRepetida.length; i++) {
  if (calificacionRepetida[i] > masRepetida) {
    masRepetida = calificacionRepetida[i];
    nota = i;
  }
}
/* justo en este array se repiten 3 veces la nota 6, 7, 8 y 10 asi que se va a quedar
con la primera nota que lea, osea con el 6.
*/

let opcion = parseInt(
  prompt(
    "Ingrese una opcion para visualizar:\n\n1. El promedio de satisfacción.\n2. Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).\n3. Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).\n4. El porcentaje de clientes que están satisfechos e insatisfechos.\n5. La calificación que se repitió más veces."
  )
);

switch (opcion) {
  case 1:
    document.write(`<p>Promedio de satisfaccion: ${prom}</p>`);
    break;
  case 2:
    document.write(
      `<p>Cantidad de clientes satisfechos (calificacion mayor o igual a 7): ${satisfechos}</p>`
    );
    break;
  case 3:
    document.write(
      `<p>Cantidad de clientes insatisfechos (calificacion menor o igual a 4): ${insatisfechos}</p>`
    );
    break;
  case 4:
    document.write(
      `<p>Porcentaje de clientes Satisfechos: ${
        (satisfechos * 100) / respuestas.length
      }%</p>`
    );
    document.write(
      `<p>Porcentaje de clientes Insatisfechos: ${
        (insatisfechos * 100) / respuestas.length
      }%</p>`
    );
    break;
  case 5:
    document.write(`Calificacion que se repitió mas veces: ${nota + 1}`);
    break;
  default:
    document.write("No es una opcion valida. Ingrese otra opcion.");
}
