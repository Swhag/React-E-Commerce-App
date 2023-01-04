import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCount,
  minusCount,
  removeItem,
  getSubtotal,
  getTax,
  getTotal,
  updateCartCount,
} from '../redux/cartSlice';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [fadeIn, setFadeIn] = useState('');
  let subtotal = state.cart.subtotal;
  let tax = state.cart.tax;
  let total = state.cart.total;

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  useEffect(() => {
    dispatch(getSubtotal());
    dispatch(getTax());
    dispatch(getTotal());
    dispatch(updateCartCount());
  }, []);

  return (
    <div className={`container cart-container start ${fadeIn}`}>
      <CartHeader></CartHeader>
      <section className='py-5'>
        <h2 className='h5 text-uppercase mb-4'>Shopping cart</h2>
        <div className='row'>
          <div className='col-lg-8 mb-4 mb-lg-0'>
            <CartTable></CartTable>
            <CartNav></CartNav>
          </div>
          <CartTotal subtotal={subtotal} tax={tax} total={total}></CartTotal>
        </div>
      </section>
    </div>
  );
}

function CartHeader() {
  let navigate = useNavigate();

  return (
    <section className='py-5 bg-light'>
      <div className='container'>
        <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
          <div className='col-lg-6'>
            <h1 className='h2 text-uppercase mb-0'>Cart</h1>
          </div>
          <div className='col-lg-6 text-lg-end'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb justify-content-lg-end mb-0 px-0 bg-light'>
                <li className='breadcrumb-item'>
                  <a
                    className='text-dark'
                    href='#!'
                    onClick={() => {
                      navigate('/');
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartTable() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className='table-responsive mb-4'>
      <table className='table text-nowrap'>
        <thead className='bg-light'>
          <tr>
            <th className='border-0 p-3' scope='col'>
              <strong className='text-sm text-uppercase'>Product</strong>
            </th>
            <th className='border-0 p-3' scope='col'>
              <strong className='text-sm text-uppercase'>Price</strong>
            </th>
            <th className='border-0 p-3' scope='col'>
              <strong className='text-sm text-uppercase'>Quantity</strong>
            </th>
            <th className='border-0 p-3' scope='col'>
              <strong className='text-sm text-uppercase'>Total</strong>
            </th>
            <th className='border-0 p-3' scope='col'>
              <strong className='text-sm text-uppercase'></strong>
            </th>
          </tr>
        </thead>
        <tbody className='border-0'>
          {state.cart.items.map((item, i) => {
            return (
              <tr key={i}>
                <th className='ps-0 py-3 border-light' scope='row'>
                  <div className='d-flex align-items-center'>
                    <a
                      className='reset-anchor d-block animsition-link'
                      href='#!'
                    >
                      <img src={item.imageURL} alt='#!' width='70' />
                    </a>
                    <div className='ms-3'>
                      <strong className='h6'>
                        <a
                          className='reset-anchor animsition-link'
                          href='#!'
                          onClick={() => {
                            navigate(`/detail/` + item.id);
                          }}
                        >
                          {item.name}
                        </a>
                      </strong>
                    </div>
                  </div>
                </th>
                <td className='p-3 align-middle border-light'>
                  <p className='mb-0 small'>${item.price}</p>
                </td>
                <td className='p-3 align-middle border-light'>
                  <div className='border d-flex align-items-center justify-content-between px-3'>
                    <span className='small text-uppercase text-gray headings-font-family'>
                      Quantity
                    </span>
                    <div className='quantity'>
                      <button
                        className='dec-btn p-0'
                        onClick={() => {
                          dispatch(minusCount(item));
                          dispatch(getSubtotal());
                          dispatch(getTax());
                          dispatch(getTotal());
                          dispatch(updateCartCount());
                        }}
                      >
                        <i className='fas fa-caret-left'></i>
                      </button>
                      <input
                        className='form-control form-control-sm border-0 shadow-0 p-0'
                        type='text'
                        value={item.count}
                        onChange={(e) => console.log(e)}
                      />
                      <button
                        className='inc-btn p-0'
                        onClick={() => {
                          dispatch(addCount(item));
                          dispatch(getSubtotal());
                          dispatch(getTax());
                          dispatch(getTotal());
                          dispatch(updateCartCount());
                        }}
                      >
                        <i className='fas fa-caret-right'></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td className='p-3 align-middle border-light'>
                  <p className='mb-0 small'>${item.price * item.count}</p>
                </td>
                <td className='p-3 align-middle border-light'>
                  <a className='reset-anchor' href='#!'>
                    <i
                      className='fas fa-trash-alt small text-muted'
                      onClick={() => {
                        dispatch(removeItem(item));
                        dispatch(getSubtotal());
                        dispatch(getTax());
                        dispatch(getTotal());
                        dispatch(updateCartCount());
                      }}
                    ></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function CartNav() {
  let navigate = useNavigate();

  return (
    <div className='bg-light px-4 py-3'>
      <div className='row align-items-center text-center'>
        <div className='col-md-6 mb-3 mb-md-0 text-md-start'>
          <a
            className='btn btn-link p-0 text-dark btn-sm'
            href='#!'
            onClick={() => {
              navigate('/Shop');
            }}
          >
            <i className='fas fa-long-arrow-alt-left me-2'></i>
            Continue shopping
          </a>
        </div>
        <div className='col-md-6 text-md-end'>
          <a
            className='btn btn-outline-dark btn-sm'
            href='#!'
            onClick={() => {
              navigate('/checkout/');
            }}
          >
            Proceed to checkout
            <i className='fas fa-long-arrow-alt-right ms-2'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
function CartTotal(props) {
  let subtotal = props.subtotal;
  let tax = props.tax;
  let shipping = 10;
  let total = parseFloat(props.total) + shipping;

  return (
    <div className='col-lg-4'>
      <div className='card border-0 rounded-0 p-lg-4 bg-light'>
        <div className='card-body'>
          <h5 className='text-uppercase mb-4'>Cart total</h5>
          <ul className='list-unstyled mb-0'>
            <li className='d-flex align-items-center justify-content-between'>
              <strong className=' small font-weight-bold'>Subtotal</strong>
              <span className='small'>${subtotal}</span>
            </li>
            <li className='border-bottom my-2'></li>

            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small font-weight-bold'>Tax</strong>
              <span className='small'>${tax}</span>
            </li>
            <li className='border-bottom my-2'></li>

            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small font-weight-bold'>Shipping</strong>
              <span className='small'>$10</span>
            </li>
            <li className='border-bottom my-2'></li>

            <li className='d-flex align-items-center justify-content-between mb-4'>
              <strong className='small font-weight-bold'>Total</strong>
              <span>${total}</span>
            </li>
            <li>
              <form action='#!'>
                <div className='input-group mb-0'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Enter your coupon'
                  />
                  <button className='btn btn-dark btn-sm w-100' type='#!'>
                    <i className='fas fa-gift me-2'></i>Apply coupon
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
