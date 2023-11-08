function cadenaMasLarga(arr) {

    let arrayMasLargo = [];
    let longitudMasLarga = 0;

    for(let i = 0; i < arr.length; i++ ){
        if(arr[i].length > arrayMasLargo.length){
            arrayMasLargo = arr[i];
            longitudMasLarga = arrayMasLargo.length
        }
    };

    return { aray: arrayMasLargo, longitud: longitudMasLarga };
}

var ejemplo1 = [["manzana", "banana", "fresa", "uva", "sandía"], ["neumático", "volante", "motor", "faro"], ["teclado", "monitor", "ratón"]];
var ejemplo2 = [["pelota", "guitarra", "sombrero", "reloj", "camiseta"], ["silla", "cuchara", "globo", "lámpara", "cepillo de dientes"], ["montaña", "bicicleta", "piano", "globo aerostático", "taza"]];
var ejemplo3 = [["perrito", "gatito", "conejo"], ["cámara", "micrófono", "altavoz", "auriculares", "pantalla"], ["libro", "pluma", "mesa", "silla", "reloj", "cuaderno"]];



var resultado1 = cadenaMasLarga(ejemplo1);
console.log("Resultado 1= Longitud de la cadena más larga:", resultado1.longitud, " Y se compone de: ", resultado1.aray);

var resultado2 = cadenaMasLarga(ejemplo2);
console.log("Resultado 2= Longitud de la cadena más larga:", resultado2.longitud, " Y se compone de: ", resultado2.aray);

var resultado3 = cadenaMasLarga(ejemplo3);
console.log("Resultado 3= Longitud de la cadena más larga:", resultado3.longitud, " Y se compone de: ", resultado3.aray);
