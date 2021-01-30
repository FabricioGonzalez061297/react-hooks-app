import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en <LoginScreen/>',()=>{

        let setUser=jest.fn();;
        
     

        test('Debe de mostrarse correctamente', () => {
            
            const wrapper= mount(
                <UserContext.Provider value={{setUser}} >
                    <LoginScreen/>
                </UserContext.Provider>
            );

            expect(wrapper).toMatchSnapshot();

        });

        test('Debe de ejecutar el setUser con el argumento esperado', () => {
            const wrapper= mount(
                <UserContext.Provider value={{setUser}} >
                    <LoginScreen/>
                </UserContext.Provider>
            );
            wrapper.find('button').prop('onClick')();
            expect(setUser).toHaveBeenCalledWith({
                id:123,
                name:'Fabricio'
            })
        })
        
        

})