import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSubtotal } from '../redux/cartSlice';

function Sidebar(props) {
  let sidebar = props.sidebar;
  let setSidebar = props.setSidebar;

  return (
    <div className={`sidebar ${sidebar}`}>
      <div
        className='toggle-btn'
        onClick={() => {
          sidebar === 'show' ? setSidebar('hidden') : setSidebar('show');
        }}
      >
        <i className='fa-solid fa-angle-left'></i>
      </div>
      <SidebarContent setSidebar={setSidebar}></SidebarContent>
    </div>
  );
}

function SidebarContent(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let setSidebar = props.setSidebar;
  let cartItems = state.cart.items;

  useEffect(() => {
    dispatch(getSubtotal());
  }, [cartItems, dispatch]);

  return (
    <div className='dropdown-menu show'>
      <div className='text-center sidebar-header'>
        <h3 className='text-info'>Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <div className='row'>
          <div className='col-lg-12 col-sm-12 col-12 cart-empty'>
            <p>Your Cart is empty</p>
          </div>
        </div>
      ) : (
        false
      )}

      {cartItems.map((item, i) => {
        return (
          <div
            className='row cart-detail'
            key={i}
            onClick={() => {
              navigate(`/detail/` + item.id);
            }}
          >
            <div className='col-lg-4 col-sm-4 col-4 cart-detail-img'>
              <img src={item.imageURL} alt='#!'></img>
            </div>
            <div className='col-lg-8 col-sm-8 col-8 cart-detail-product'>
              <p>{item.name}</p>
              <span className='price text-info'> ${item.price}</span>
              <span> Quantity: {item.count}</span>
            </div>
          </div>
        );
      })}

      <div className='col-lg-12 col-sm-12 col-12 text-center checkout'>
        <p>
          Subtotal:
          <span className='text-info sidebar-total'>
            {' '}
            ${state.cart.subtotal}
          </span>
        </p>
      </div>
      <div className='col-lg-12 col-sm-12 col-12 text-center checkout'>
        <button
          className='btn btn-primary btn-block'
          onClick={() => {
            navigate('/cart');
            setSidebar('hidden');
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
