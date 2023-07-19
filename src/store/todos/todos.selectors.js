export const allTodos = (state) => state.todoReducer.todos

export const activeTodos = (state) => state.todos.filter(todo => todo.completed === false);