export const createNewTodoAction = (payload) => ({
  type: 'CREATE_NEW_TODO',
  payload,
})

export const deleteTodoAction = (payload) => ({
  type: 'DELETE_TODO',
  payload,
})

export const changeTodoAction = (payload) => ({
  type: 'CHANGE_TODO',
  payload,
})

export const sortTodoAction = () => ({
  type: 'SORT_TODO_LIST',
})