
// import heroes, {owner} from '../data/heroes';
import heroes from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find( (heroes) =>{
//         if (heroes.id == id) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
// console.log(heroes);

export const getHeroeById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

// console.log( getHeroeById(2));

 export const getHeroesByOwner = (owner) => heroes.filter(( heroes) => heroes.owner === owner);
// console.log(getHeroesByOwner('Marvel'));