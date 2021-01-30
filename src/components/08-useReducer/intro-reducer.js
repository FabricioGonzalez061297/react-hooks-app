console.log('hola mundo');


const initialState = [
    {
        id: 1,
        todo: "comprar leche",
        done: false
    }
];


const todoReducer = (state = initialState, action) => {

    switch (action?.type) {
        case 'agregar':{
            return [...state,action.payload];
        }
        default:{
            return state;
        }
        
    }

}

let todos= todoReducer();


const newTodo = {
    id: 2,
    todo: "comprar Agua",
    done: false
};

const addTodo= {
    type:'agregar',
    payload:newTodo
}

todos=todoReducer(todos,addTodo);


console.log(todos)
