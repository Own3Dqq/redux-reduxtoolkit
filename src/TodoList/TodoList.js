import {useDispatch, useSelector} from "react-redux";
import TodoItem from './TodoItem'
import {useState} from "react";
import {createNewTodoAction} from "../store/action/action";
import './Todo.sass'
import {activeTodos, allTodos} from "../store/selectors/todos.selectors";


const TodoList = () => {
  const dispatch = useDispatch()
  const todoListItems = useSelector(allTodos);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (input) => {
    setInputValue(input.value)
  }
  
  return (
      <div className='todo'>
        <div className='todo__wrapper'>
          <input className='todo__input' type="text" value={inputValue} onChange={(e) => handleChange(e.target)}/>
          <button  className='todo__btn' onClick={() => {
            dispatch(createNewTodoAction(inputValue))
            setInputValue('')
          }}>
            Create Todo
          </button>
        </div>

        <ul className='todo__list'>
          {
            todoListItems.map((item, index) => {
              return <TodoItem key={index} text={item.text} />
            })
          }
        </ul>
      </div>
  )
}

export default TodoList;