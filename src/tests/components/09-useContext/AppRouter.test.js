import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UseContext';

describe('Pruebas en <AppRouter/>', () => {

    const user={
        name:'fabricio',
        id:1
    }

    const wrapper= mount(
        <UserContext.Provider value={{user}} >
            <AppRouter/>
        </UserContext.Provider>
    )

    test('debería crearce correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    


})
