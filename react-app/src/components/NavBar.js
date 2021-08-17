
import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {

  const user = useSelector(state => state.session.user);
  const [optionsOn, setOptionsOn] = useState(false)

  return (
    <>
    <nav>
      <div className='nav_container'>
        <div className='nav_logo'>
          <NavLink to='/' exact={true} activeClassName='active'>
            SpudHub
          </NavLink>
        </div>
        <div>
            <button onClick={()=> setOptionsOn(!optionsOn)}>
              <i className="fas fa-shopping-bag" />
            </button>
        </div>
        <div className='nav_options'>
          {user ? null :
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
    <div className="sidebar" style={!optionsOn ? {transform: 'translateX(-110%)'} : {}}>
      <div>
        <button className="arrow-button" onClick={()=> setOptionsOn(!optionsOn)}>
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <div>
        <div>
          {user ? user.username : 'log In!'}
        </div>
        <div>
          {user? <LogoutButton/> : 'more features coming soon!'}
        </div>
      </div>
    </div>
    </>
  );
}


export default NavBar;
