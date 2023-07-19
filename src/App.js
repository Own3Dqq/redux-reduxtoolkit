import {NewTodo} from './components/NewTodo'
import {TodoList} from './components/TodoList'
import {Filters} from './components/Filters';

import "./index.css";
import './style/Todo.css'


export default function App() {
  return (
      <div className="App">
        <h1>Redux Todo</h1>
        <div className="container">
          <NewTodo />
          <Filters />
          <TodoList />
        </div>

      </div>
  );
}
