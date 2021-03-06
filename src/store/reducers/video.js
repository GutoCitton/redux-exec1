const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {id: 1, title: 'Iniciando com React', lessons: [
      {id: 1, title: 'Primeira aula'},
      {id: 2, title: 'Segunda aula'}
    ]},
    {id: 2, title: 'Iniciando com Redux', lessons: [
      {id: 3, title: 'Terceira aula'},
      {id: 4, title: 'Quarta aula'}
    ]}
  ]
}

const videoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_LESSON') {
    return {
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }
  return (
    state
  )
}

export default videoReducer;