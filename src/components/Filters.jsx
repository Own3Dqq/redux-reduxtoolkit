import {Link, useParams} from 'react-router-dom';

const Filters = () => {
  const {filter: activeFilter = 'all'} = useParams();

  return (
    <div className='filter'>
      <Link className="filter__btn" to="/all" style={{color: activeFilter === 'all' ? 'orange' : 'white'}}>All</Link>
      <Link className="filter__btn" to="/active" style={{color: activeFilter === 'active' ? 'orange' : 'white'}}>Active</Link>
      <Link className="filter__btn" to="/completed" style={{color: activeFilter === 'completed' ? 'orange' : 'white'}}>Completed</Link>
      <Link className="filter__btn" to="/completed" style={{color: activeFilter === 'deleted' ? 'orange' : 'white'}}>Deleted</Link>
    </div>
  )
}

export {Filters};
