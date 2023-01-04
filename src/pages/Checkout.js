import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Checkout() {
  let [fadeIn, setFadeIn] = useState('');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`container checkout-container start ${fadeIn}`}>
      <CheckoutHeader></CheckoutHeader>

      <section className='py-5'>
        <div className='row'>
          <CheckoutDetails></CheckoutDetails>
          <OrderSummary></OrderSummary>
        </div>
      </section>
    </div>
  );
}

function CheckoutPayment() {
  return (
    <div>
      <h2 className='h5 text-uppercase mb-4'>Payment details</h2>

      <div className='row'>
        <div className='col-lg-12 '>
          <label className='form-label text-sm text-uppercase'>
            CARD NUMBER
          </label>
          <div className='input-group'>
            <input
              type='tel'
              className='form-control form-control-lg'
              placeholder='Valid Card Number'
            />
            <i className='fa fa-credit-card credit-card-icon'></i>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-7 payment-line-block'>
          <label className='form-label text-sm text-uppercase'>
            <span className='hidden-xs'>EXPIRATION</span>
            <span className='visible-xs-inline'>EXP</span> DATE
          </label>
          <input
            type='tel'
            className='form-control form-control-lg'
            placeholder='MM / YY'
          />
        </div>
        <div className='col-lg-5 pull-right payment-line-block'>
          <label className='form-label text-sm text-uppercase'>CV CODE</label>
          <input
            type='tel'
            className='form-control form-control-lg'
            placeholder='CVC'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 payment-line-block'>
          <label className='form-label text-sm text-uppercase'>
            CARD OWNER
          </label>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Card Owner Name'
          />
        </div>
      </div>
      <div className='row'>
        <div className='inline-image'>
          <img
            className='img-responsive images'
            src='https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png'
            alt='#!'
          ></img>
          <img
            className='img-responsive images'
            src='https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Discover-Curved.png'
            alt='#!'
          ></img>
          <img
            className='img-responsive images'
            src='https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Paypal-Curved.png'
            alt='#!'
          ></img>
          <img
            className='img-responsive images'
            src='https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png'
            alt='#!'
          ></img>
        </div>
      </div>
      <ul className='border-bottom my-2 checkout-divider'></ul>
    </div>
  );
}

function CheckoutHeader() {
  let navigate = useNavigate();

  return (
    <section className='py-5 bg-light'>
      <div className='container'>
        <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
          <div className='col-lg-6'>
            <h1 className='h2 text-uppercase mb-0'>
              <span
                className='checkout-header'
                onClick={() => {
                  navigate('/checkout');
                }}
              >
                Checkout
              </span>
            </h1>
          </div>
          <div className='col-lg-6 text-lg-end'>
            <nav>
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
                <li className='breadcrumb-item'>
                  <a
                    className='text-dark'
                    href='#!'
                    onClick={() => {
                      navigate('/cart');
                    }}
                  >
                    Cart
                  </a>
                </li>
                <li className='breadcrumb-item active'>Checkout</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckoutDetails() {
  return (
    <div className='col-lg-8'>
      <h2 className='h5 text-uppercase mb-4'>Shipping details</h2>
      <form action='#!'>
        <div className='row gy-3'>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              First name
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='firstName'
              placeholder='Enter your first name'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              Last name
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='lastName'
              placeholder='Enter your last name'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              Email address
            </label>
            <input
              className='form-control form-control-lg'
              type='email'
              id='email'
              placeholder='e.g. John@example.com'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              Phone number
            </label>
            <input
              className='form-control form-control-lg'
              type='tel'
              id='phone'
              placeholder='e.g. +02 245354745'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              Company name (optional)
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='company'
              placeholder='Your company name'
            />
          </div>

          <div className='col-lg-12'>
            <label className='form-label text-sm text-uppercase'>
              Address line 1
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='address'
              placeholder='House number and street name'
            />
          </div>
          <div className='col-lg-12'>
            <label className='form-label text-sm text-uppercase'>
              Address line 2
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='addressalt'
              placeholder='Apartment, Suite, Unit, etc (optional)'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              Town/City
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='city'
            />
          </div>
          <div className='col-lg-6'>
            <label className='form-label text-sm text-uppercase'>
              State/County
            </label>
            <input
              className='form-control form-control-lg'
              type='text'
              id='state'
            />
          </div>
          <div className='col-lg-6'>
            <button
              className='btn btn-link text-dark p-0 shadow-0'
              type='button'
            >
              <div className='form-check'>
                <input
                  className='form-check-input'
                  id='alternateAddressCheckbox'
                  type='checkbox'
                />
                <label className='form-check-label'>
                  Alternate billing address
                </label>
              </div>
            </button>
          </div>
          <ul className='border-bottom my-2 checkout-divider'></ul>
          <CheckoutPayment></CheckoutPayment>
          <CheckoutNav></CheckoutNav>
        </div>
      </form>
    </div>
  );
}

function OrderSummary() {
  let state = useSelector((state) => state);
  let subtotal = state.cart.subtotal;
  let tax = state.cart.tax;
  let total = state.cart.total;

  return (
    <div className='col-lg-4'>
      <div className='card border-0 rounded-0 p-lg-4 bg-light'>
        <div className='card-body'>
          <h5 className='text-uppercase mb-4'>Your order</h5>
          <ul className='list-unstyled mb-0'>
            <li className='border-bottom my-2'></li>
            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small fw-bold'>Order Subtotal</strong>
              <span>${subtotal}</span>
            </li>

            <li className='border-bottom my-2'></li>
            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small fw-bold'>Shipping and Handling</strong>
              <span>$10</span>
            </li>

            <li className='border-bottom my-2'></li>
            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small fw-bold'>Tax</strong>
              <span>${tax}</span>
            </li>
            <li className='border-bottom my-2'></li>
            <li className='d-flex align-items-center justify-content-between'>
              <strong className='small fw-bold'>Total</strong>
              <span>${total}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CheckoutNav() {
  let navigate = useNavigate();

  return (
    <div className='bg-light px-4 py-3'>
      <div className='row align-items-center text-center'>
        <div className='col-md-6 mb-3 mb-md-0 text-md-start'>
          <a
            className='btn btn-link p-0 text-dark btn-sm'
            href='#!'
            onClick={() => {
              navigate('/Cart');
            }}
          >
            <i className='fas fa-long-arrow-alt-left me-2'></i>
            Return to cart
          </a>
        </div>
        <div className='col-md-6 text-md-end'>
          <a className='btn btn-outline-dark btn-sm' href='#!'>
            Place Order
            <i className='fas fa-long-arrow-alt-right ms-2'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
