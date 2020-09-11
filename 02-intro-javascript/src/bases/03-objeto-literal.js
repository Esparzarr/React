const person ={
    name: 'Angel',
    lasname: 'Esparza',
    age: 22,
    address: {
        city: 'Colima',
        zip: 28077,
        lat: 15.56,
        lng: 32.45,
    }
};
const person2 = {...person};
person2.name = 'Juan';
person2.lasname = 'Perez';
person2.age = 20;


console.log( person );
console.log(person2);