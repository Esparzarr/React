// Desestructuracion
// Asignacion Desestructuracion

const persona = {
    nombre: 'Angel',
    edad: 22,
    clave: 'ASD45'
}

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({ clave, nombre, edad}) =>{
    // console.log(nombre, edad);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.65,
            lng: 46.58
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
