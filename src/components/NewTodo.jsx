import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";


export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='form__input' type="text" name="title" placeholder="new todo" />
      <input className='form__btn' type="submit" value="Add Todo" />
    </form>
  );
};