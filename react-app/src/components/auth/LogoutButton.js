import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import './auth.css'

const LogoutButton = ({ cart, setCart, setShowLoginModal, setShowSignUpModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    setCart(true)
    await dispatch(logout());
    history.push('/splash')
    setShowLoginModal(false)
    setShowSignUpModal(false)
  };

  return <button className='logout-btn' onClick={onLogout}>Log out</button>;
};

export default LogoutButton;
