const activo = true;

// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo'
// }else{
//     mensaje = 'Inactivo'
// }

//Forma mas corta de hacerlo 
// const mensaje = (!activo) ? 'Activo' : 'Inactivo';

//Otra formas mucho mas sinplificado

const mensaje = !activo && 'Activo';

console.log(mensaje);