import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from './../../fixtures/demoTodos';

describe('Pruebas en <TodoList />', () => {

    const handleDelete = jest.fn();
    const handleToogle = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoList
            todos={demoTodos}
            handleToggle={handleToogle}
            handleDelete={handleDelete}

        />);
    })



    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de tener dos <TodoListItem/>', () => {
        expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });

})