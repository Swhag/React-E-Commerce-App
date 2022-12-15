import { useEffect, useState } from 'react';

function Cart(props) {
  let [fadeIn, setFadeIn] = useState('');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`px-4 px-lg-0 start ${fadeIn}`}>
      <div className='pb-5 cart-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 p-5 bg-white rounded shadow-sm mb-5 cart-top'>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col' className='border-0 bg-light'>
                        <div className='p-2 px-3 text-uppercase'>Product</div>
                      </th>
                      <th scope='col' className='border-0 bg-light'>
                        <div className='py-2 text-uppercase'>Price</div>
                      </th>
                      <th scope='col' className='border-0 bg-light'>
                        <div className='py-2 text-uppercase'>Quantity</div>
                      </th>
                      <th scope='col' className='border-0 bg-light'>
                        <div className='py-2 text-uppercase'>Remove</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='border-0'>
                        <div className='p-2'>
                          <img
                            src='https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg'
                            alt=''
                            width='70'
                            className='img-fluid rounded shadow-sm'
                          />
                          <div className='ml-3 d-inline-block align-middle'>
                            <h5 className='mb-0'>
                              <a
                                href='#'
                                className='text-dark d-inline-block align-middle'
                              >
                                Timex Unisex Originals
                              </a>
                            </h5>
                            <span className='text-muted font-weight-normal font-italic d-block'>
                              Category: Watches
                            </span>
                          </div>
                        </div>
                      </th>
                      <td className='border-0 align-middle'>
                        <strong>$79.00</strong>
                      </td>
                      <td className='border-0 align-middle'>
                        <strong>3</strong>
                      </td>
                      <td className='border-0 align-middle'>
                        <a href='#' className='text-dark'>
                          <i className='fa fa-trash'></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <div className='p-2'>
                          <img
                            src='https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg'
                            alt=''
                            width='70'
                            className='img-fluid rounded shadow-sm'
                          />
                          <div className='ml-3 d-inline-block align-middle'>
                            <h5 className='mb-0'>
                              <a href='#' className='text-dark d-inline-block'>
                                Lumix camera lense
                              </a>
                            </h5>
                            <span className='text-muted font-weight-normal font-italic'>
                              Category: Electronics
                            </span>
                          </div>
                        </div>
                      </th>
                      <td className='align-middle'>
                        <strong>$79.00</strong>
                      </td>
                      <td className='align-middle'>
                        <strong>3</strong>
                      </td>
                      <td className='align-middle'>
                        <a href='#' className='text-dark'>
                          <i className='fa fa-trash'></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>
                        <div className='p-2'>
                          <img
                            src='https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg'
                            alt=''
                            width='70'
                            className='img-fluid rounded shadow-sm'
                          />
                          <div className='ml-3 d-inline-block align-middle'>
                            <h5 className='mb-0'>
                              <a href='#' className='text-dark d-inline-block'>
                                Gray Nike running shoe
                              </a>
                            </h5>
                            <span className='text-muted font-weight-normal font-italic'>
                              Category: Fashion
                            </span>
                          </div>
                        </div>
                      </th>

                      <td className='align-middle'>
                        <strong>$79.00</strong>
                      </td>
                      <td className='align-middle'>
                        <strong>3</strong>
                      </td>
                      <td className='align-middle'>
                        <a href='#' className='text-dark'>
                          <i className='fa fa-trash'></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='row py-5 p-4 bg-white rounded shadow-sm'>
            <div className='col-lg-6'>
              <div className='bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold'>
                Coupon code
              </div>
              <div className='p-4'>
                <p className='font-italic mb-4'>
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className='input-group mb-4 border rounded-pill p-2'>
                  <input
                    type='text'
                    placeholder='Apply coupon'
                    aria-describedby='button-addon3'
                    className='form-control border-0'
                  />
                  <div className='input-group-append border-0'>
                    <button
                      id='button-addon3'
                      type='button'
                      className='btn btn-dark px-4 rounded-pill'
                    >
                      <i className='fa fa-gift mr-2'></i>Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className='bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold'>
                Instructions for seller
              </div>
              <div className='p-4'>
                <p className='font-italic mb-4'>
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea
                  name=''
                  cols='30'
                  rows='2'
                  className='form-control'
                ></textarea>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold'>
                Order summary
              </div>
              <div className='p-4'>
                <p className='font-italic mb-4'>
                  Shipping and additional costs are calculated based on values
                  you have entered.
                </p>
                <ul className='list-unstyled mb-4'>
                  <li className='d-flex justify-content-between py-3 border-bottom'>
                    <strong className='text-muted'>Order Subtotal </strong>
                    <strong>$390.00</strong>
                  </li>
                  <li className='d-flex justify-content-between py-3 border-bottom'>
                    <strong className='text-muted'>
                      Shipping and handling
                    </strong>
                    <strong>$10.00</strong>
                  </li>
                  <li className='d-flex justify-content-between py-3 border-bottom'>
                    <strong className='text-muted'>Tax</strong>
                    <strong>$0.00</strong>
                  </li>
                  <li className='d-flex justify-content-between py-3 border-bottom'>
                    <strong className='text-muted'>Total</strong>
                    <h5 className='font-weight-bold'>$400.00</h5>
                  </li>
                </ul>
                <a
                  href='#'
                  className='btn btn-dark rounded-pill py-2 btn-block'
                >
                  Procceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
