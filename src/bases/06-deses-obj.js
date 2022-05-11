// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const use_Context = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.231231,
            lng: -12.123123
        }
    };
} 


const { nombreClave, anios, latlng: { lat, lng } } = use_Context( persona );
console.log(nombreClave, anios);
console.log(lat, lng);