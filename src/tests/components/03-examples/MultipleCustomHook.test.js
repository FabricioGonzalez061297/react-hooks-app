import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { UseFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';


//no interesa la implementación sino que valores retorna 

//en ves de utilizar el useFetch en este archivo, va a utilizar una implementación propia
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => {

    beforeEach(()=>{
        
        useCounter.mockReturnValue({
            state:10,
            increment:()=>{},
            decrement:()=>{},
            reset:()=>{}
        });
    })


    test('debe de mostrarse correctamente', async () => {

        UseFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
            msgError: null
        });


        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', async () => {

        UseFetch.mockReturnValue({
            data: [{
                author:'Fabricio',
                quote:'hola mundo'
            }],
            isLoading: false,
            hasError: false,
            msgError: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('hola mundo');

    });

});