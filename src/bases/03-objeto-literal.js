const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55532124,
        lat: 14.123547,
        lng: 34.234234
    }
};

// console.table(persona);

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);