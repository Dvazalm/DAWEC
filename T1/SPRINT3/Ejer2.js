function transponerMatriz(matriz) {
    let nMatriz = matriz.length;


    // Creamos una nueva matriz para almacenar la transpuesta.
    let matrizFinal = [];

    // Inicializamos la matriz transpuesta con ceros.
    for (let i = 0; i < nMatriz; i++) {
        matrizFinal.push([]);
    }

    // Llenamos la matriz transpuesta intercambiando filas y columnas.
    for (let i = 0; i < nMatriz; i++) {
        for (let j = 0; j < nMatriz; j++) {
            matrizFinal[j][i] = matriz[i][j];
        }
    }

    return matrizFinal;
}

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(transponerMatriz(matriz));
