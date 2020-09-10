import {getHeroeById} from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // Importar el
//         const p1 = getHeroeById(2);
//         console.log(p1);
//         // resolve();
//     },2000)
// });

// promesa.then ((heroe) => {
//     console.log('heroe', heroe)
// });

// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout (() => {
            const p1 = getHeroeById(id);
           if (p1) {
               resolve(p1);
           }else{
               reject('No se encontro el hereo');
           }
        }, 3000)
    });
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);