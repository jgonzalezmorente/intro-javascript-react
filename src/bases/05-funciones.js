// Funciones

// const saludar = function saludar( nombre ) {
//     return `Hola, ${ nombre }`;
// }


const saludar2 = ( nombre ) => `Hola, ${ nombre }`
const saludar3 = () => 'Hola Mundo';

// console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);


// Tarea
const getUsuarioActivo = ( nombre ) => ({ uid: 'ABC567', username: nombre });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);