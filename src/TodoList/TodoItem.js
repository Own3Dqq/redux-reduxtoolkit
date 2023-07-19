import {useState} from "react";
import './Todo.sass'

const TodoItem = ({text}) => {
  const [change, setChange] = useState(text)


  return (
      <li className='todo__item'>
        <span className='text'>{text}</span>
        <div className='todo-item__inner'>
          <button className='todo-item__btn'>
            <span className="material-symbols-outlined">Edit</span>
          </button>
          <button className='todo-item__btn'>
            <span className="material-symbols-outlined">Delete</span>
          </button>
        </div>
      </li>
  )
}

export default TodoItem