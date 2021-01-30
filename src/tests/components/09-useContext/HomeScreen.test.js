import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en <HomeScreen/>',()=>{

    const user={
        name:'fabricio',
        email:'fabricio@gmail.com'
    }

    test('debe de mostrarse correctamente', () => {
           const wrapper= mount(
            <UserContext.Provider value={{...user}} >
                <HomeScreen/>
            </UserContext.Provider>);

            expect(wrapper).toMatchSnapshot();
    })
    
});