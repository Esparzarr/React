const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [p1] = personajes;

console.log(p1);

// Tareas
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const useState = (valor) =>{
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();
