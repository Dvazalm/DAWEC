function filtrarPropiedades(obj, propiedades) {
    var nuevoObjeto = {};
    for (var i = 0; i < propiedades.length; i++) {
        var propiedad = propiedades[i];
        if (obj.hasOwnProperty(propiedad)) {
            nuevoObjeto[propiedad] = obj[propiedad];
        }
    }
    return nuevoObjeto;
}

var entrada = {a: 1, b: 2, c: 3, d: 4};
var propiedadParaFiltar = ["a", "c"];

var resultado = filtrarPropiedades(entrada, propiedadParaFiltar);
console.log(resultado);
