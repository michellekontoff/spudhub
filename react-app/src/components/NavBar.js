
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {

  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <div className='nav_container'>
        <div className='nav_logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            SpudHub
          </NavLink>
        </div>
        <div className='nav_options'>
          {user ? <LogoutButton/> :
            <>
            <>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
            </>
            <>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
            </>
            </>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;





{/* <li>
  <NavLink to='/login' exact={true} activeClassName='active'>
    Login
  </NavLink>
</li>
<li>
  <NavLink to='/sign-up' exact={true} activeClassName='active'>
    Sign Up
  </NavLink>
</li> */}
{/* <li>
  <NavLink to='/users' exact={true} activeClassName='active'>
    Users
  </NavLink>
</li> */}
