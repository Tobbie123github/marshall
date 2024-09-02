
import './NotFound.css';
import {NavLink} from 'react-router-dom';
const NotFound = () => {
  return (
    <section>
      <div className='notfound_container'>
        <h2>ERROR <strong>!</strong> PAGE NOT FOUND</h2>
      <h4>Return back to <NavLink to='/'>Home</NavLink> Page</h4>
      </div>
    </section>
  )
}

export default NotFound