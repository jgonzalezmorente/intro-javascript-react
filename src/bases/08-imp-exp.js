//import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';

export const getHeroeById = (id_) => heroes.find( ({ id }) => id === id_);

// console.log( getHeroeById(2) );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log(getHeroesByOwner('DC'));
// console.log(owners);