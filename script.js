// Como obtener un elemento aleatorio de un array

// const fruits = ["Apple", "Banana", "Watermelon"]
// const vegetables = ["Beans", "Lettuce", "Carrot", "Potato"]
// const greenGrocery = fruits.concat(vegetables)

// const randomElement = (array) => {
//     const index = Math.floor(Math.random() * array.length)
//     return array[index]
// }

// console.log(randomElement(greenGrocery))


// EJERCICIOS ADA

// obtenerMenor(numeros)

// const obtenerMenor = (numeros) => {   
//     let numMenor = numeros[0] // asignación del valor a la variable
//     for (const numero of numeros) {
//         if (numMenor > numero) {
//             numMenor = numero
//         } 
//     }
//     return numMenor
// }

// console.log(obtenerMenor([5, 7, 99, 34, 54, 2, 12])) // invocación de la función con argumento que se asignan a los parámetros 



// sumar(numeros)

// const sumarNumeros = (numeros) => {
//     let acc = 0
//     for (const numero of numeros) {
//         acc = acc + numero
//     }
//     return acc
// }

// console.log(sumarNumeros([50, 7, 10, 12, 24]))



// contiene(numero, numeros)

// const contiene = (valor, numeros) => {
//     // let num = numero  
//     for (const numero of numeros) {
//         if (valor === numero) {
//             return true
//         }
//     }
//     return false
// }

// console.log(contiene(54, [5, 7, 99, 3, 4, 54, 2, 12])) // true
// console.log(contiene(103, [5, 7, 99, 3, 4, 54, 2, 12])) // false



// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un STRING string y devuelva un STRING donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// const invertirCaso = (string) => {
//     let stringInvertido = ""
//     for (const caracter of string) {
//         if (caracter === caracter.toUpperCase()) {
//             stringInvertido += caracter.toLowerCase()
//         } else {
//             stringInvertido += caracter.toUpperCase()
//         }
//     }
//     return stringInvertido
// }

// console.log(invertirCaso('Ada Lovelace')) // 'aDA lOVELACE'
// console.log(invertirCaso('feliz cumple')) // 'FELIZ CUMPLE'
// console.log(invertirCaso('jAvAsCrIpT')) // 'JaVaScRiPt'


// gano(tragamonedas)
// Crear una función gano que tome como argumento un ARRAY tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, sólo debe comparar los 5 primeros.

// const gano = (tragamonedas) => {
//     for (let i = 0; i < 4; i++) {
//         if (tragamonedas[i] !== tragamonedas[i+1]) {
//             return false
//         }
//     }
//     return true
// }

// console.log(gano(['⭐️', '⭐️', '⭐️', '💫', '✨'])) // false
// console.log(gano(['💫', '💫', '💫', '💫', '💫'])) // true
// console.log(gano(['💫', '💫', '💫', '💫', '💫', '⭐️'])) // true



// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// const estanJuntos = (personajes) => {
//     for (let i = 0; i < personajes.length; i++) {
//         if (personajes[i] === "Frodo" && (personajes[i-1] === "Sam" || personajes[i+1] === "Sam")){
//             return true
//         }
//     }
//     return false
// }

// console.log(estanJuntos(['Sam', 'Frodo', 'Legolas'])) //true
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Frodo'])) //false
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo', 'Sam'])) //true



// separar(perrosYGatos)
// Crear una función separar que tome como argumento un STRING con emojis de perros y gatos y devuelva un STRING con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// con caractereres

// const separar = (perrosYGatos) => {
//     let perros = ""
//     let gatos = ""
//     for (const mascota of perrosYGatos) {
//         if (mascota === perrosYGatos[0]) {
//             perros += mascota
//         } else {
//             gatos += mascota
//         }
//     }
//     return `${perros}${gatos}`
// }

// console.log(separar('PGPGGPP'))

// con emojis

// const separar = (perrosYGatos) => {
//     let perros = ""
//     let gatos = ""
//     for (const mascota of perrosYGatos) {
//         if (mascota === "🐶") {
//             perros += mascota
//         } else {
//             gatos += mascota
//         }
//     }
//     return `${perros}${gatos}`
// }

// console.log(separar('🐶🐱🐶🐱🐱🐶🐶')) // '🐶🐶🐶🐶🐱🐱🐱'



// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas


// const obtenerChatStatus = (usuarias) => {
//     if (usuarias.length === 1) {
//         return `${usuarias[0]} está conectada`

//     } else if (usuarias.length === 2) {
//         return `${usuarias[0]} y ${usuarias[1]} están conectadas`

//     } else if (usuarias.length > 2) {
//         return `${usuarias[0]}, ${usuarias[1]} y ${usuarias.length - 2} persona(s) más están conectadas`
//     }
// }


// console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
// console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
// console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Ro', 'Vero'])) // 'Ada, Grace y X persona(s) más están conectadas'


// germinar(plantines)
// Crear una función germinar que tome como argumento un STRING de plantines con flores y plantines (🌱). El ARRAY debe comenzar con una flor. La función debe devolver un STRING con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// con caractereres

// const germinar = (plantines) =>{
//     let jardin = plantines.split("")
//     console.log(jardin)
//     for (let i = 1; i < jardin.length ; i++ ) {
//         if(jardin[i] === "P"){
//             jardin[i] = jardin[i - 1]
//         }
//     }
//     return jardin.join(" ")
// }

// console.log(germinar("GSPTGPPTTPPP"))
// console.log(germinar("TPPPGPPSPPPP"))
// console.log(germinar("TPGPSPTPGPSP"))

// con emojis

// /(?:)/u este regex permite separar los emojis correctamente

// const germinar = (plantines) =>{
//     let jardin = plantines.split(/(?:)/u)
//     for (let i = 1; i < jardin.length ; i++ ){
//         if(jardin[i] === "🌱"){
//             jardin[i] = jardin[i - 1]
//         }
//     }
//     return jardin.join(" ")
// }

// console.log(germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱')) // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
// console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱')) // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// console.log(germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱')) // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'


// comer(plantas)
// Crear una función comer que tome por parámetro un STRING plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// CON CARACTERES

// const comer = (plantas) => {          // REVISITAR ESTE MÉTODO LUEGO
//     let plantasSobrevivientes = plantas.split(' ')
//     console.log(plantasSobrevivientes)
//     plantasSobrevivientes.splice(plantas.indexOf('C'), (plantas.indexOf('S')-plantas.indexOf('C'))+1,)
//     return plantasSobrevivientes.join()
// }

// SIN USAR FOR CON CARACTERES
// const comer = (plantas) => {
//     let plantasPrevias = ""
//     let plantasPosteriores = ""
//     plantasPrevias = plantas.slice((plantas[0]-plantas.indexOf('C')), plantas.indexOf('C'))
//     plantasPosteriores = plantas.slice(plantas.indexOf('S')+1)
//     return plantasPrevias + plantasPosteriores
// }

// USANDO FOR CON CARACTERES
// const comer = (plantas) => {
//     let plantasSobrevivientes = ""
//     let pasoPorConejo = false
//     let pasoPorSenal = false
//     for (const planta of plantas) {
//        if (planta === 'C') {
//         pasoPorConejo = true
//        } else if (planta === 'S') {
//         pasoPorSenal = true
//        } else if (!pasoPorConejo || pasoPorSenal) {
//         plantasSobrevivientes += planta
//        }
//     }
//     return plantasSobrevivientes
// }

// console.log(comer('CZAZS')) // ''
// console.log(comer('ZACZZZS')) // 'ZA'
// console.log(comer('CZAZSZ')) // 'Z'
// console.log(comer('PZPCPAPPST')) // 'PZPT'

// USANDO FOR CON EMOJIS

// const comer = (plantas) => {
//     let plantasSobrevivientes = ""
//     let pasoPorConejo = false
//     let pasoPorSenal = false
//     for (const planta of plantas) {
//        if (planta === '🐰') {
//         pasoPorConejo = true
//        } else if (planta === '🚫') {
//         pasoPorSenal = true
//        } else if (!pasoPorConejo || pasoPorSenal) {
//         plantasSobrevivientes += planta
//        }
//     }
//     return plantasSobrevivientes
// }

// console.log(comer('🐰🥕🥬🥕🚫')) // ''
// console.log(comer('🥕🥬🐰🥕🥕🥕🚫')) // '🥕🥬'
// console.log(comer('🐰🥕🥬🥕🚫🥕')) // '🥕'
// console.log(comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷')) // '🌱🥕🌱🌷'


// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// const multiplicar = (multiplicador, numeros) => {
//     let resultadosMulitipicacion = []
//     for (const numero of numeros) {
//         resultadosMulitipicacion.push(numero * multiplicador)
//     }
//     return resultadosMulitipicacion
// } 

// console.log(multiplicar(2, [5, 7, 15, 22, 40])) // [10, 14, 30, 44, 80]
// console.log(multiplicar(10, [2, 5, 77])) // [20, 50, 770]



// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

// const filtrarPorLongitud = (longitud, palabras) => {
//     let filtrarPorLongitudMayorA = []
//     for (const palabra of palabras) {
//         if (palabra.length > longitud) {
//             filtrarPorLongitudMayorA.push(palabra)
//         }
//     }
//     return filtrarPorLongitudMayorA
// }

// console.log(filtrarPorLongitud(4, [
//   'dia',
//   'remolacha',
//   'azul',
//   'sorpresa',
//   'te',
//   'verde',
// ])) // ['remolacha', 'sorpresa', 'verde']


// recortar(cantidadLetras, palabras)
// Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

// const recortar = (cantidadLetras, palabras) => {
//     let palabrasRecortadas = []
//     for (let i = 0; i < palabras.length; i++) {
//         palabrasRecortadas.push(palabras[i].slice(0, cantidadLetras))
//     }
//     return palabrasRecortadas
// }

// console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america'])) // ['elef', 'dino' 'choc', 'avio', 'amer']
// console.log(recortar(1, ['algoritmo', 'bug', 'compilador'])) // ['a', 'b', 'c']


// sonIguales(a, b)
// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// const sonIguales = (a, b) => {
//     for (let i = 0; i < a.length; i++) {
//        if (a[i] !== b[i]) {
//         return false
//        }
//     }
//     return true
// }

// console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105])) // true
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])) // false
// console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105])) // false



// obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
// Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
//     let ganaJugadoraA = 0
//     let ganaJugadoraB = 0
//     for (let i = 0; i < puntajesA.length; i++) {
//         if (puntajesA[i] > puntajesB[i]) {
//             ganaJugadoraA++
//         } else if (puntajesA[i] < puntajesB[i]) {
//             ganaJugadoraB++
//         }
//     }
//     if (ganaJugadoraA > ganaJugadoraB) {
//         return `Gana ${jugadoraA}`
//     } else if (ganaJugadoraA < ganaJugadoraB) {
//         return `Gana ${jugadoraB}`
//     } else if (ganaJugadoraA === ganaJugadoraB) {  // esta comparación podría no estar
//         return "Empate"
//     }
// }

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B

// console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3])) // Ada
// console.log(obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9])) // Empate
// console.log(obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3])) // Grace



// jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
// Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

// const jugadasA = ['piedra', 'piedra', 'tijera']
// const jugadasB = ['papel', 'tijera', 'tijera']

// // jugadasA[0] vs. jugadasB[0] -> Gana B
// // jugadasA[1] vs. jugadasB[1] -> Gana A
// // jugadasA[2] vs. jugadasB[2] -> Empate

// // Resultado final: Empate
// jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
// jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
// jugarPiedraPapelTijeras(
//   'Ada',
//   'Grace',
//   ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
//   ['papel', 'piedra', 'tijera', 'tijera', 'papel']
// ) // Ada