import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setTIndex } from '../redux/pageSlice';
import { setItems } from '../redux/itemSlice';

function TopNavbar(props) {
  let state = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [navToggle, setNavToggle] = useState('hidden');
  let [pages, setPages] = useState('hidden');
  let setLogin = props.setLogin;

  useEffect(() => {
    props.getCart();
  }, []);

  return (
    <header className='header bg-white'>
      <div className='container px-lg-3'>
        <nav className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'>
          <a
            className='navbar-brand top-navbar-brand'
            href='#!'
            onClick={() => {
              navigate('/');
            }}
          >
            <span className='fw-bold text-uppercase text-dark'>KickStore</span>
          </a>
          <button
            className='navbar-toggler navbar-toggler-end'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span
              className='navbar-toggler-icon'
              onClick={() => {
                navToggle === 'hidden'
                  ? setNavToggle('show')
                  : setNavToggle('hidden');
              }}
            ></span>
          </button>

          <div
            className={`collapse navbar-collapse ${navToggle}`}
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto'>
              <li className='nav-item top-nav-item'>
                <a
                  className='nav-link'
                  href='#!'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Home
                </a>
              </li>

              <li className='nav-item top-nav-item'>
                <a
                  className='nav-link'
                  href='#!'
                  onClick={() => {
                    navigate('/shop');
                    dispatch(setItems(state.items.data));
                    dispatch(setPage(1));
                    dispatch(setTIndex());
                  }}
                >
                  Shop
                </a>
              </li>

              <li className='nav-item top-nav-item'>
                <a
                  className='nav-link'
                  href='#!'
                  onClick={() => {
                    navigate('/detail/53');
                  }}
                >
                  Product detail
                </a>
              </li>

              <li className='nav-item top-nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#!'
                  onMouseEnter={() => {
                    setPages('show-pages');
                  }}
                >
                  Pages
                </a>

                <div
                  className={`dropdown-menu mt-3 shadow-sm navbar-dropdown-menu ${pages}`}
                  onMouseLeave={() => {
                    setPages('');
                  }}
                >
                  <a
                    className='dropdown-item border-0 transition-link'
                    href='#!'
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Homepage
                  </a>
                  <a
                    className='dropdown-item border-0 transition-link'
                    href='shop.html'
                  >
                    Category
                  </a>
                  <a
                    className='dropdown-item border-0 transition-link'
                    href='detail.html'
                  >
                    Product detail
                  </a>
                  <a
                    className='dropdown-item border-0 transition-link'
                    href='cart.html'
                  >
                    Shopping cart
                  </a>
                  <a
                    className='dropdown-item border-0 transition-link'
                    href='checkout.html'
                  >
                    Checkout
                  </a>
                </div>
              </li>
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item top-nav-item'>
                <a
                  className='nav-link'
                  href='#!'
                  onClick={() => {
                    navigate('/cart');
                    props.setSidebar('hidden');
                  }}
                >
                  <i className='fas fa-dolly-flatbed me-1 text-gray'></i>
                  Cart
                  <small className='text-gray fw-normal cart-count'>
                    ({state.cart.itemCount})
                  </small>
                </a>
              </li>
              <li className='nav-item top-nav-item'>
                <a className='nav-link' href='#!'>
                  <i className='far fa-heart me-1'></i>
                  <small className='text-gray fw-normal'>(0)</small>
                </a>
              </li>
              <li className='nav-item top-nav-item'>
                <a
                  className='nav-link'
                  href='#!'
                  onClick={() => {
                    setLogin('show-login');
                  }}
                >
                  <i className='fas fa-user me-1 text-gray fw-normal'></i>Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default TopNavbar;
