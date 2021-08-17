
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {

  const user = useSelector(state => state.session.user);
  const [optionsOn, setOptionsOn] = useState(false);
  const [cart, setCart] = useState(true);

  return (
    <>
    <nav>
      <div className='nav_container'>
        <div className='nav_logo'>
          <div>
            <button className='nav_sidebar_icons' onClick={()=> setOptionsOn(!optionsOn)}>
              <i className="fas fa-bars" />
            </button>
          </div>
          <NavLink to='/' exact={true} activeClassName='active'>
            SpudHub
          </NavLink>
        </div>
        <div className='nav_options'>
          {user ? <>
            <button className='nav_sidebar_icons nav_cart_icon' onClick={() => setCart(!cart)}>
              <i className="fas fa-shopping-cart" />
            </button>
          </>
          : <>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
            </>
          }
        </div>
      </div>
    </nav>
    <div className="sidebar" style={!optionsOn ? {transform: 'translateX(-110%)'} : {}}>
      <div className='sidebar_container'>
        <div className="arrow-button" onClick={()=> setOptionsOn(!optionsOn)}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className='sidebar_userInfo'>
          <div>
            <p>
            {user ? 'Welcome  ' + user.username + '!' : 'Please log In'}
            </p>
            <p>
            {user ? 'Email:  ' + user.email : 'Or sign up to see more!'}
            </p>
          </div>
          <div>
            <Link to="/product/create">Create New Product Listing</Link>
          </div>
          <div>
            {user? <LogoutButton/> : 'More features coming soon!'}
          </div>
        </div>
      </div>
    </div>
    <div className="shopping_cart_bar" style={!cart ? {transform: 'translateX(-100%)'} : {}}>
      <div className='cart_container'>
        <div className="cart_arrow_button" onClick={()=> setCart(!cart)}>
          <i className="fas fa-arrow-right"></i>
        </div>
        <div className='cart_items'>
            More features coming soon!
        </div>
      </div>
    </div>
    </>
  );
}


export default NavBar;
