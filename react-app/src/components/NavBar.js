
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import { Modal } from '../context/Modal'
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm'
import ShoppingCart from './Cart/ShoppingCart';


const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const shoppingCart = useSelector(state => state.shoppingCart)
  const [optionsOn, setOptionsOn] = useState(false);
  const [cart, setCart] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [cartQty, setCartQty] = useState('0')

  let cartItems = Object.values(shoppingCart)

  function setCartAmount() {
      cartItems = cartItems.map(item => item.quantity)
    if (cartItems.length) {
        const numItems = cartItems.reduce((item1, item2) => {
            return item1 + item2
          })
        setCartQty(numItems.toString())
    } else {
        setCartQty('0')
    }
  }

  useEffect(setCartAmount, [shoppingCart])





  return (
    <>
    <nav id="navbar" style={!user ? {display: 'none'} : {}}>
      <div className='nav_container'>
        <div className='nav_logo'>
          <div>
            <button className='nav_sidebar_icons' onClick={()=> setOptionsOn(!optionsOn)}>
              <i className="fas fa-bars" />
            </button>
          </div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className='logo' src='https://raw.githubusercontent.com/michellekontoff/spudhub/main/documentation/logo-tp-border1.png' alt='logo'></img>
          </NavLink>
        </div>
        <div className='nav_options'>
          {user ? <>
            <button className='nav_sidebar_icons nav_cart_icon' onClick={() => setCart(!cart)}>
                {cartQty > 0 ? <span className="cart-quantity">{cartQty}</span> : null}
              <i className="fas fa-shopping-cart" />
            </button>
          </>
          : <>
            <>
              <button className='nav-btn' onClick={() => setShowLoginModal(true)}>Login</button>
              {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                  <LoginForm />
                </Modal>
              )}
            </>
            <>
              <button className='nav-btn' onClick={() => setShowSignUpModal(true)}>Sign Up</button>
              {showSignUpModal && (
                <Modal onClose={() => setShowSignUpModal(false)}>
                  <SignUpForm />
                </Modal>
              )}
            </>
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
            <p>
              {user ?
                <Link to='/products/create' onClick={() => setOptionsOn(!optionsOn)}>Create New Product Listing!</Link>
                : null
              }
            </p>
          </div>
          <div onClick={()=> setOptionsOn(!optionsOn)}>
            {user ? <LogoutButton setCart={setCart} cart={cart} setShowLoginModal={setShowLoginModal} setShowSignUpModal={setShowSignUpModal} /> : 'More features coming soon!'}
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
          <div className='cart_title'>{user?.username}'s Shopping Cart:</div>
          <ShoppingCart cart={cart} setCart={setCart} />
        </div>

      </div>
    </div>
    </>
  );
}


export default NavBar;
