
import heroes, {owner} from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find( (heroes) =>{
//         if (heroes.id == id) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// }
console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find( (heroes) => heroes.id === id);
}

console.log( getHeroeById(2));

const getHeroesByOwner = (owner) => heroes.filter(( heroes) => heroes.owner === owner);
console.log(getHeroesByOwner('Marvel'));