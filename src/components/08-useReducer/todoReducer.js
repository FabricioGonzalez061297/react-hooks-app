export const todoReducer=(state=[],action)=>{

    switch (action?.type) {
        case 'add':{
            return [...state,action.payload];
        }

        case 'delete':{

            const newState= state.filter(t=> t.id !== action.payload);

            return [...newState];
        }

        case 'toggle':{
            return state.map(t=> t.id===action.payload 
                ? {...t, done:!t.done}
                : t );
        }

        case 'toggle-old':{
            return state.map( t=>{

                if(t.id===action.payload){
                    t.done=!t.done;
                }
                return t;
            });
        }
    
        default:{
            return state;
        }
    }

}