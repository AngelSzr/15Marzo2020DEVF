//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
/*let numero = parseInt(prompt('Introduce un número'));
let arregloNumero = [];
for (let i = 1; i <= numero; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}*/

//Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
/*let numero1 = parseInt(prompt('Introduzca el primer número'));
let numero2 = parseInt(prompt('Introduzca el segundo número'));
if (numero1 >= 50 || numero2 >= 50) {
    alert('Por favor introduzca un valor menor o igual a 50')
} else {
    for (i = 1; i <= 50; i++) {
        if (numero1 == i || numero2 == i) { console.log("loteria") } else { console.log(i) }

    }
}*/

//Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
/*let arreglo = [];
let numero;
do {
    numero = parseInt(prompt("Ingresa un número"));
    if (typeof (1) == typeof (numero)) {
        arreglo.push(numero);
    }
} while (numero !== 0);*/
/*let arreglo = [];
let numero;
do {
    numero = parseInt(prompt("Ingresa un número"));
    if (typeof (1) == typeof (numero)) {
        arreglo.push(numero);
    }
} while (numero != "0");
arreglo.pop()
console.log(arreglo)*/



//Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.


//Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
/*let dia;
while (dia !== "domingo") {
    dia = prompt('Ingresa un día de la semana')
    if (dia == "lunes") {
        alert("Hoy es lunes")
    } else if (dia == "martes") {
        alert("Hoy es martes")
    } else if (dia == "miercoles") {
        alert("Hoy es miercoles")
    } else if (dia == "jueves") {
        alert("Hoy es jueves")
    } else if (dia == "viernes") {
        alert("Hoy es viernes")

    } else if (dia == "sabado") {
        alert("Hoy es sabado")

    } else {
        alert("Vete a descansar")
    }
};*/

//Crea un programa que imprima en consola los números impares del 1 al 50.
/*for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}*/


//Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.https://pastebin.com/Zzk8g7Z6
let pokemons =
    ['bulbasaur',
        'ivysaur',
        'venusaur',
        'charmander',
        'charmeleon',
        'charizard',
        'squirtle',
        'wartortle',
        'blastoise',
        'caterpie',
        'metapod',
        'butterfree',
        'weedle',
        'kakuna',
        'beedrill',
        'pidgey',
        'pidgeotto',
        'pidgeot',
        'rattata',
        'raticate',
        'spearow',
        'fearow',
        'ekans',
        'arbok',
        'pikachu',
        'raichu',
        'sandshrew',
        'sandslash',
        'nidoran-f',
        'nidorina',
        'nidoqueen',
        'nidoran-m',
        'nidorino',
        'nidoking',
        'clefairy',
        'clefable',
        'vulpix',
        'ninetales',
        'jigglypuff',
        'wigglytuff',
        'zubat',
        'golbat',
        'oddish',
        'gloom',
        'vileplume',
        'paras',
        'parasect',
        'venonat',
        'venomoth',
        'diglett',
        'dugtrio',
        'meowth',
        'persian',
        'psyduck',
        'golduck',
        'mankey',
        'primeape',
        'growlithe',
        'arcanine',
        'poliwag',
        'poliwhirl',
        'poliwrath',
        'abra',
        'kadabra',
        'alakazam',
        'machop',
        'machoke',
        'machamp',
        'bellsprout',
        'weepinbell',
        'victreebel',
        'tentacool',
        'tentacruel',
        'geodude',
        'graveler',
        'golem',
        'ponyta',
        'rapidash',
        'slowpoke',
        'slowbro',
        'magnemite',
        'magneton',
        'farfetchd',
        'doduo',
        'dodrio',
        'seel',
        'dewgong',
        'grimer',
        'muk',
        'shellder',
        'cloyster',
        'gastly',
        'haunter',
        'gengar',
        'onix',
        'drowzee',
        'hypno',
        'krabby',
        'kingler',
        'voltorb']
let numero = parseInt(prompt("Elige un número"));
for (let i = 1; i <= numero; i++) { //Ir contando desde 1 en 1 hasta el número, pero si pongo 0 me arrojará a bulbasaur que en posición es 0 cumpliendo que si es múltiplo de 0, pero en longitud es 1 que no es multiplo de 5, por lo que lo ignoré. 
    if (i % 5 == 0) { //aquí hace lo de múltiplo de 5
        console.log(pokemons[i - 1]) //y aquí le resto 1 porque como en posición considera el número 0, le estoy quitando eso. Por ejemplo si yo pongo 100 me tendría que arrojar a voltorb que es el último y como es el 100mo pokémon entonces si es múltiplo de 5, pero me arrojará un error porque no hay una posición 100, sino que hay hasta la 99a posición, espero que si se entienda ):
    }
}
//Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.