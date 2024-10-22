const respuestas = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10];

const tamañoArray = 10; // Define el tamaño del array
const calificacionRepetida = new Array(tamañoArray).fill(0); // Asigno el valor 0 a todos los elementos del array

let suma = 0, prom, satisfechos = 0, insatisfechos = 0, notaMasRepetida = 0, nota = 0;

for (i = 0; i < respuestas.length; i++) 
{
  suma = suma + respuestas[i];

  if (respuestas[i] >= 7) {
    satisfechos++;
  }

  if (respuestas[i] <= 4) {
    insatisfechos++;
  }
  calificacionRepetida[respuestas[i]] = calificacionRepetida[respuestas[i]] + 1;
}

prom = suma / respuestas.length;

for (i = 1; i <= calificacionRepetida.length; i++) {
  if (calificacionRepetida[i] > notaMasRepetida) {
    notaMasRepetida = calificacionRepetida[i];
    nota = i;
  }
}

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
    document.write(`Calificacion que se repitió mas veces: ${nota}`);
    break;
  default:
    document.write("No es una opcion valida. Ingrese otra opcion.");
}
