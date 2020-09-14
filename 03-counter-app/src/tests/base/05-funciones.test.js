import { getUser } from '../../base/05-funciones';
import '@testing-library/jest-dom';

describe(' Pruebas en 05-funciones', () => {
    test(' getUser debe retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        
        expect( user ).toBe( userTest );
    })
    
})