import { shallow } from "enzyme";
import { TodoItem } from "../../../components/08-useReducer/TodoItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoItem/>', () => {

    let wrapper;
    const handleDelete = jest.fn();
    const handleToogle = jest.fn();


    beforeEach(() => {
        wrapper = shallow(<TodoItem
            todo={demoTodos[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToogle}
        />);
    })

    test('deberia mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');

        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);

    })

    test('debe de llamar la funcion handleToogle', () => {
        wrapper.find('p').simulate('click');

        expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
    })


    test('debe mostrar el texto correctamente', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(`1.  ${demoTodos[0].desc}`)
    });

    test('debe de tener la clase complete si el todo.done esta en true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoItem
            todo={todo}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToogle}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });

})