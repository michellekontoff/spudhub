import { useSelector } from 'react-redux';
import '../Splash/Splash.css'
import '../NavBar.css'
import { Modal } from '../../context/Modal'
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../auth/SignUpForm'
import { useState } from 'react';


const Splash = () => {

    const user = useSelector(state => state.session.user);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    return (
        <>
        <div className='header-container'>
          <span className='user-header-name'>
            <div className="splash-title">
              <h1>Welcome to SpudHub!</h1>
              { user ? null :
              <div className='log-sign-header'>
               <>
                    <>
                    <button className='nav-btn' onClick={() => setShowLoginModal(true)}>LOGIN</button>
                    {showLoginModal && (
                        <Modal onClose={() => setShowLoginModal(false)}>
                            <LoginForm />
                        </Modal>
                    )}
                    </>
                    <>
                    <button className='nav-btn' onClick={() => setShowSignUpModal(true)}>SIGN UP</button>
                    {showSignUpModal && (
                        <Modal onClose={() => setShowSignUpModal(false)}>
                            <SignUpForm />
                        </Modal>
                    )}
                    </>
                </>
              </div>
              }
            </div>
          </span>
          <div className='splash-mission'>
            <h2>Our Mission:</h2>
            <p>SpudHub is a community run organization focused on connecting you with farmers in your
                local area who can provide you and your family with the produce and nutrients you need.
            </p>
        </div>
        </div>
        </>
    )
}

export default Splash
