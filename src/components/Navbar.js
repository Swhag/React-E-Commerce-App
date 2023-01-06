import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setTIndex } from '../redux/pageSlice';
import { setItems } from '../redux/itemSlice';
import { Nav } from 'react-bootstrap';

function TopNavbar(props) {
  let state = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [navToggle, setNavToggle] = useState('hidden');
  let [pages, setPages] = useState('hide-pages');
  let setLogin = props.setLogin;

  useEffect(() => {
    props.getCart();
  }, []);

  return (
    <header className='header bg-white'>
      <div className='container px-lg-3'>
        <nav
          className='navbar navbar-expand-lg navbar-light py-3 px-lg-0'
          onMouseLeave={() => {
            setPages('hide-pages');
          }}
        >
          <Nav.Link
            className='navbar-brand top-navbar-brand'
            onClick={() => {
              navigate('/');
            }}
          >
            <span className='fw-bold text-uppercase text-dark'>KickStore</span>
          </Nav.Link>
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
                <Nav.Link
                  className='nav-link'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Home
                </Nav.Link>
              </li>

              <li className='nav-item top-nav-item'>
                <Nav.Link
                  className='nav-link'
                  onClick={() => {
                    navigate('/shop');
                    dispatch(setItems(state.items.data));
                    dispatch(setPage(1));
                    dispatch(setTIndex());
                  }}
                >
                  Shop
                </Nav.Link>
              </li>

              <li className='nav-item top-nav-item'>
                <Nav.Link
                  className='nav-link'
                  onClick={() => {
                    navigate('/detail/53');
                  }}
                >
                  Product detail
                </Nav.Link>
              </li>

              {/* ------------------------------------------------------------- */}

              <li className='nav-item top-nav-item dropdown'>
                <Nav.Link
                  className='nav-link dropdown-toggle navbar-dropdown-toggle'
                  onMouseEnter={() => {
                    setPages('show-pages');
                  }}
                >
                  Pages
                </Nav.Link>

                <div
                  className={`dropdown-menu mt-3 shadow-sm navbar-dropdown-menu ${pages}`}
                  onMouseLeave={() => {
                    setPages('hide-pages');
                  }}
                >
                  <Nav.Link
                    className='dropdown-item border-0 transition-link'
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Homepage
                  </Nav.Link>
                  <Nav.Link
                    className='dropdown-item border-0 transition-link'
                    onClick={() => {
                      navigate('/Shop');
                    }}
                  >
                    Shop
                  </Nav.Link>
                  <Nav.Link
                    className='dropdown-item border-0 transition-link'
                    onClick={() => {
                      navigate('/detail/53');
                    }}
                  >
                    Product detail
                  </Nav.Link>
                  <Nav.Link
                    className='dropdown-item border-0 transition-link'
                    onClick={() => {
                      navigate('/cart');
                      props.setSidebar('hidden');
                    }}
                  >
                    Shopping cart
                  </Nav.Link>
                  <Nav.Link
                    className='dropdown-item border-0 transition-link'
                    onClick={() => {
                      navigate('/checkout/');
                    }}
                  >
                    Checkout
                  </Nav.Link>
                </div>
              </li>

              {/* ------------------------------------------------------------- */}
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item top-nav-item navbar-cart'>
                <Nav.Link
                  className='nav-link'
                  onClick={() => {
                    navigate('/cart');
                    props.setSidebar('hidden');
                  }}
                >
                  <i className='fas fa-dolly-flatbed me-1 cart-icon'></i>
                  Cart
                  <small className='fw-normal cart-count'>
                    ({state.cart.itemCount})
                  </small>
                </Nav.Link>
              </li>
              <li className='nav-item top-nav-item'>
                <Nav.Link className='nav-link'>
                  <i className='far fa-heart me-1'></i>
                  <small className='text-gray fw-normal'>(0)</small>
                </Nav.Link>
              </li>
              <li className='nav-item top-nav-item'>
                <Nav.Link
                  className='nav-link'
                  onClick={() => {
                    setLogin('show-login');
                  }}
                >
                  <i className='fas fa-user me-1  fw-normal'></i>Login
                </Nav.Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default TopNavbar;
