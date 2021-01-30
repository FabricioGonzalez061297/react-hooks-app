import { shallow } from "enzyme";
import {HookApp} from './../HookApp';
import React from 'react'

describe('Prueba en <HookApp />',()=>{
    test('Debe mostrarse correctament',()=>{
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    });
});