import {useSelector, useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';
import {removeTodo, toggleTodo, changeTodo} from "../store/todos/todos-actions";
import {selectVisibleTodos} from '../store/todos/todos-selectors';


export const TodoList = () => {
  const dispatch = useDispatch();
  const {filter} = useParams();
  const todos = useSelector(state => selectVisibleTodos(state, filter));


  return (
      <ul className='todo__list'>
        {todos.map((todo) => (
            <li key={todo.title} className='todo__item'>
              <input
                  className='todo-item__input'
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {" "}
              <span className='todo-item__text'> {todo.title}</span>

              {" "}
              <div className='todo-item__inner'>
                <button className='todo-item__btn' onClick={() => dispatch(changeTodo(todo.id))}>
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className='todo-item__btn' onClick={() => dispatch(removeTodo(todo.id))}>
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </li>
        ))}
      </ul>
  );
};
