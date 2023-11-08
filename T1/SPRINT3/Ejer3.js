function fusionarObjetos(obj1, obj2) {
   
    let resultado = { ...obj1 };

    for (const propiedad in obj2) {
        if (obj2.hasOwnProperty(propiedad)) {
            resultado[propiedad] = obj2[propiedad];
        }
    }

    return resultado;
}

var PEPE = { a: 1, b: 2, c: 3, d: 4 };
var MANUEL = { b: 2, z: 3 };


console.log(fusionarObjetos(PEPE, MANUEL));