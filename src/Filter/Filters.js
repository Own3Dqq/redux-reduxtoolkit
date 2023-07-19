import {filters} from "../store/filters/filter.reducers";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";


const Filters = () => {
  return (
      <div>
        <Link to={{'/'}} style={{color: active}} ></Link>
      </div>
  )
}

export default Filters
