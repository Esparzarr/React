//Funciones en JS

// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`; 
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


console.log(saludar2('Vegueta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC5',
    username: 'd4s5'
});

const user = getUser();
console.log(user);

//Tarea
// 1. Transformar a una funcion de flechas |
// 2. Tienen que retornar un objeto implicito |
// 3. Pruebas |

const getUsuarioActivo = (nombre) =>({
        uid: 'A545',
        username: nombre
})

const usuarioActivo = getUsuarioActivo('Esparza');
console.log(usuarioActivo);

