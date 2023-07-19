const initialState = {
  todos: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_TODO":
      return {
        ...state,
        todos: [{
          text: action.payload,
        },...state.todos]
      }

    case "RESET" :
      return {
        ...state,
        value: 0
      }

    default: return state;
  }
}

