import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import AddUser from '../pages/AddUsers';

const Navbar = () =>{

    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        {/* For active link to use exact */}
        <NavLink className="nav-link" exact to="/">Home </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
      </li>
   
    </ul>
   <Link className="btn btn-outline-light" exact to='/AddUsers/Add'>Add User</Link>
  </div>
</nav>
</div>
        
    );
};
export default Navbar; 