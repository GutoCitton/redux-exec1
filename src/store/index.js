// import { createStore } from "redux";

// const INITIAL_STATE = {
//   activeLesson: {},
//   activeModule: {},
//   modules: [
//     {id: 1, title: 'Iniciando com react', çessons: [
//       {id: 1, title: 'Primeira aula'},
//       {id: 2, title: 'Segunda aula'}
//     ]},
//     {id: 2, title: 'Iniciando com Redux', çessons: [
//       {id: 3, title: 'Terceira aula'},
//       {id: 4, title: 'Quarta aula'}
//     ]}]
// }


// function reducer(state = INITIAL_STATE, action) {
//   if (action.type === 'SET_LESSON') {
//     return {
//       ...state,
//       activeLesson: action.lesson,
//       activeModule: action.module
//     }
//   }
//   return state;
// }

// const store = createStore(reducer);

// export default store;

import { createStore } from "redux";

import rootReducer from './reducers'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, reduxDevTools);

export default store;