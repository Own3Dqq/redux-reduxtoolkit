import {useSelector, useDispatch} from "react-redux";
import {incrementAction, decrementAction, resetAction} from '../store/action/action'
import './Counter.sass'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counterReducer.value)

  return (
      <div>
        <h2 className='counter'>{counter}</h2>
        <div className="wrapper">
          <button className="decrement-btn" onClick={() => {
            dispatch(decrementAction())
          }}>-
          </button>
          <button className="increment-btn" onClick={() => {
            dispatch(incrementAction())
          }}>+
          </button>
          <button className='reset-btn' onClick={() => {
            dispatch(resetAction())
          }}>Reset
          </button>
        </div>
      </div>
  )
}
export default Counter
