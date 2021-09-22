import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import ProductDetails from './components/Products/ProductDetails';
import HomePage from './components/Home/Homepage';
import ProductEditForm from './components/Products/ProductEditForm';
import { authenticate } from './store/session';
import ProductCreateForm from './components/Products/ProductCreateForm';
import { fetchAllProducts } from './store/products';
import { fetchAllReviews } from './store/reviews';
import reducer, { loadCart } from './store/shoppingCart';
import { createStore } from 'redux';
import ReviewPage from './components/Reviews/ReviewPage';
import Footer from './components/Footer';
import Splash from './components/Splash';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(fetchAllProducts());
      await dispatch(fetchAllReviews());

      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <div id='wrapper'>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/products/create' exact={true}>
          <ProductCreateForm />
        </ProtectedRoute>
        <ProtectedRoute path='/products/:id' exact={true} >
          <ProductDetails  />
          <ReviewPage />
        </ProtectedRoute>
        <ProtectedRoute path='/products/:id/edit' exact={true} >
          <ProductEditForm />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <Route path='/splash' exact={true}>
          <Splash />
        </Route>
        <Route path='/reviews/:id' exact={true} >
          <ReviewPage />
        </Route>
        <Route>
          404 page not found
        </Route>
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
