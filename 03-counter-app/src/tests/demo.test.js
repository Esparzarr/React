describe( ' Pruebas en el archivo demo.test.js ', () => {
    
    test ( ' deben de ser iguale los string ', () => {

        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 ); // === 
    })

    test( ' deben de ser los numeros iguales ', () => {
        const num = 10;
        const num2 = 10;

        expect( num ).toBe( num2 );
    })

});


