const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// Tarea
// 1. El primer valor del arreglo se llamarĂ¡ nombre
// 2. El segundo se llamarĂ¡ el setNombre
const use_state = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = use_state('Goku');

console.log( nombre );
setNombre();