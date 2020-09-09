const name = 'Angel';
const lastName = 'Esparza';

// const nombrecompleto = nombre + ' ' + apellido;
const fullname = ` ${name} ${lastName} `;
console.log(fullname);

function getHi(){
    return 'Hi' + fullname;
}

console.log(` This is one text: ${getHi( fullname) } `);