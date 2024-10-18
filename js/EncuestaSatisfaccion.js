const respuestas = [
  8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10,
];
let suma = 0,
  prom,
  satisfechos = 0,
  insatisfechos = 0;

// console.log(respuestas.length);

for (i = 0; i < respuestas.length; i++) {
  suma = suma + respuestas[i];
  console.log(suma);
  if (respuestas[i] >= 7) {
    satisfechos++;
  }
  if (respuestas[i] <= 4) {
    insatisfechos++;
  }
}

prom = suma / respuestas.length;
console.log(prom);

let opcion = parseInt(
  prompt(
    "Ingrese una opcion para visualizar\n1. El promedio de satisfacción.\n2. Cuántos clientes dieron una calificación mayor o igual a 7 (considerados satisfechos).\n3. Cuántos clientes dieron una calificación menor o igual a 4 (considerados insatisfechos).\n4. El porcentaje de clientes que están satisfechos e insatisfechos.\n5. La calificación que se repitió más veces."
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
    document.write(`Calificacion que se repitió mas veces: sape`);
    break;
  default:
    document.write("No es una opcion valida. Ingrese otra opcion.");
}
