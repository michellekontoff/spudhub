
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
    {optionsOn ? <OptionsTab/> : null}
    </>
  );
}

function OptionsTab(){
  const [showOptions, setShowOptions] = useState(true);

  return (
    <>
    <div style={showOptions ? { marginLeft: '300px' } : {}} >
      <p>name</p>
      <p>logout</p>
    </div>
    <div
      style={showOptions ? { transform: 'translateX(-100%)' } : {}}
    >
      <div className='test'>
      <button className="arrow-button" onClick={() => setShowOptions(false)}>
        <i className="fas fa-arrow-right"></i> hide
      </button>
      </div>
    </div>
    </>
  )
}

export default NavBar;
