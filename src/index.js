import React from 'react';
import ReactDOM from 'react-dom';
// import './components/08-useReducer/intro-reducer';

// import {HookApp} from './HookApp'; 
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleFormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Memorize } from './components/06-memos/Memorize';
// import { Memohook } from './components/06-memos/MemoHook';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';

ReactDOM.render(

    <div>
      {/* <HookApp></HookApp>
      <CounterApp></CounterApp>
      <CounterWithCustomHook></CounterWithCustomHook>
      <SimpleFormWithCustomHook></SimpleFormWithCustomHook>
      <MultipleCustomHooks></MultipleCustomHooks>
      <FocusScreen></FocusScreen>
      <RealExampleRef></RealExampleRef>
      <Memorize></Memorize> */}
      {/* <Memohook></Memohook> */}
      {/* <CallbackHook></CallbackHook> */}
      {/* <Padre /> */}
      {/* <TodoApp/> */}
      <MainApp/>
    </div>

    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
