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
  let dispatch = useDispatch();
  let [fadeIn, setFadeIn] = useState('');

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
    <div class=' container-fluid my-5 '>
      <div class='row justify-content-center '>
        <div class='col-xl-10'>
          <div class='container card card-container'>
            <div class='row p-2 mt-3 justify-content-between mx-sm-2'>
              <div class='col'></div>
              <div class='col'>
                <div class='row justify-content-start '>
                  <div class='col'>
                    <img
                      class='irc_mi img-fluid cursor-pointer '
                      src='https://i.imgur.com/jFQo2lD.png'
                      width='70'
                      height='70'
                    ></img>
                  </div>
                </div>
              </div>
              <div class='col-auto'>
                <img
                  class='irc_mi img-fluid bell'
                  src='https://i.imgur.com/uSHMClk.jpg'
                  width='30'
                  height='30'
                ></img>
              </div>
            </div>
            <div class='row  mx-auto justify-content-center text-center'>
              <div class='col-12 mt-3 '>
                <nav aria-label='breadcrumb' class='second '>
                  <ol class='breadcrumb indigo lighten-6 first  '>
                    <li class='breadcrumb-item font-weight-bold '>
                      <a class='black-text text-uppercase ' href='#'>
                        <span class='mr-md-3 mr-1'>BACK TO SHOP</span>
                      </a>
                      <i
                        class='fa fa-angle-double-right '
                        aria-hidden='true'
                      ></i>
                    </li>
                    <li class='breadcrumb-item font-weight-bold'>
                      <a class='black-text text-uppercase' href='#'>
                        <span class='mr-md-3 mr-1'>SHOPPING BAG</span>
                      </a>
                      <i
                        class='fa fa-angle-double-right text-uppercase '
                        aria-hidden='true'
                      ></i>
                    </li>
                    <li class='breadcrumb-item font-weight-bold'>
                      <a class='black-text text-uppercase active-2' href='#'>
                        <span class='mr-md-3 mr-1'>CHECKOUT</span>
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            <div class='row justify-content-around'>
              <div class='col-md-5'>
                <div class='card border-0'>
                  <div class='card-header pb-0'>
                    <h2 class='card-title space '>Checkout</h2>
                    <p class='card-text text-muted mt-4  space'>
                      SHIPPING DETAILS
                    </p>
                    <hr class='my-0'></hr>
                  </div>
                  <div class='card-body'>
                    <div class='row justify-content-between'>
                      <div class='col-auto mt-0'>
                        <p>
                          <b>
                            BBBootstrap Team Vasant Vihar 110020 New Delhi India
                          </b>
                        </p>
                      </div>
                      <div class='col-auto'>
                        <p>
                          <b>BBBootstrap@gmail.com</b>{' '}
                        </p>
                      </div>
                    </div>
                    <div class='row mt-4'>
                      <div class='col'>
                        <p class='text-muted mb-2'>PAYMENT DETAILS</p>
                        <hr class='mt-0'></hr>
                      </div>
                    </div>
                    <div class='form-group'>
                      <label for='NAME' class='small text-muted mb-1'>
                        NAME ON CARD
                      </label>
                      <input
                        type='text'
                        class='form-control form-control-sm'
                        name='NAME'
                        id='NAME'
                        aria-describedby='helpId'
                        placeholder='BBBootstrap Team'
                      ></input>
                    </div>
                    <div class='form-group'>
                      <label for='NAME' class='small text-muted mb-1'>
                        CARD NUMBER
                      </label>
                      <input
                        type='text'
                        class='form-control form-control-sm'
                        name='NAME'
                        id='NAME'
                        aria-describedby='helpId'
                        placeholder='4534 5555 5555 5555'
                      ></input>
                    </div>
                    <div class='row no-gutters'>
                      <div class='col-sm-6 pr-sm-2'>
                        <div class='form-group'>
                          <label for='NAME' class='small text-muted mb-1'>
                            VALID THROUGH
                          </label>
                          <input
                            type='text'
                            class='form-control form-control-sm'
                            name='NAME'
                            id='NAME'
                            aria-describedby='helpId'
                            placeholder='06/21'
                          ></input>
                        </div>
                      </div>
                      <div class='col-sm-6'>
                        <div class='form-group'>
                          <label for='NAME' class='small text-muted mb-1'>
                            CVC CODE
                          </label>
                          <input
                            type='text'
                            class='form-control form-control-sm'
                            name='NAME'
                            id='NAME'
                            aria-describedby='helpId'
                            placeholder='183'
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class='row mb-md-5'>
                      <div class='col'>
                        <button
                          type='button'
                          name=''
                          id=''
                          class='btn  btn-lg btn-block '
                        >
                          PURCHASE $37 SEK
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='col-md-5'>
                <div class='card border-0 '>
                  <div class='card-header card-2'>
                    <p class='card-text text-muted mt-md-4  mb-2 space'>
                      YOUR ORDER{' '}
                      <span class=' small text-muted ml-2 cursor-pointer'>
                        EDIT SHOPPING BAG
                      </span>{' '}
                    </p>
                    <hr class='my-2'></hr>
                  </div>
                  <div class='card-body pt-0'>
                    <div class='row  justify-content-between'>
                      <div class='col-auto col-md-7'>
                        <div class='media flex-column flex-sm-row'>
                          <img
                            class=' img-fluid'
                            src='https://i.imgur.com/6oHix28.jpg'
                            width='62'
                            height='62'
                          ></img>
                          <div class='media-body  my-auto'>
                            <div class='row '>
                              <div class='col-auto'>
                                <p class='mb-0'>
                                  <b>EC-GO Bag Standard</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class=' pl-0 flex-sm-col col-auto  my-auto'>
                        {' '}
                        <p class='boxed-1'>2</p>
                      </div>
                      <div class=' pl-0 flex-sm-col col-auto  my-auto '>
                        <p>
                          <b>179 SEK</b>
                        </p>
                      </div>
                    </div>
                    <hr class='my-2'></hr>
                    <div class='row  justify-content-between'>
                      <div class='col-auto col-md-7'>
                        <div class='media flex-column flex-sm-row'>
                          <img
                            class=' img-fluid '
                            src='https://i.imgur.com/9MHvALb.jpg'
                            width='62'
                            height='62'
                          ></img>
                          <div class='media-body  my-auto'>
                            <div class='row '>
                              <div class='col'>
                                <p class='mb-0'>
                                  <b>EC-GO Bag Standard</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='pl-0 flex-sm-col col-auto  my-auto'>
                        {' '}
                        <p class='boxed'>3</p>
                      </div>
                      <div class='pl-0 flex-sm-col col-auto my-auto'>
                        <p>
                          <b>179 SEK</b>
                        </p>
                      </div>
                    </div>
                    <hr class='my-2'></hr>
                    <div class='row  justify-content-between'>
                      <div class='col-auto col-md-7'>
                        <div class='media flex-column flex-sm-row'>
                          <img
                            class=' img-fluid '
                            src='https://i.imgur.com/6oHix28.jpg'
                            width='62'
                            height='62'
                          ></img>
                          <div class='media-body  my-auto'>
                            <div class='row '>
                              <div class='col'>
                                <p class='mb-0'>
                                  <b>EC-GO Bag Standard</b>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='pl-0 flex-sm-col col-auto  my-auto'>
                        {' '}
                        <p class='boxed-1'>2</p>
                      </div>
                      <div class='pl-0 flex-sm-col col-auto my-auto'>
                        <p>
                          <b>179 SEK</b>
                        </p>
                      </div>
                    </div>
                    <hr class='my-2'></hr>
                    <div class='row '>
                      <div class='col'>
                        <div class='row justify-content-between'>
                          <div class='col-4'>
                            <p class='mb-1'>
                              <b>Subtotal</b>
                            </p>
                          </div>
                          <div class='flex-sm-col col-auto'>
                            <p class='mb-1'>
                              <b>179 SEK</b>
                            </p>
                          </div>
                        </div>
                        <div class='row justify-content-between'>
                          <div class='col'>
                            <p class='mb-1'>
                              <b>Shipping</b>
                            </p>
                          </div>
                          <div class='flex-sm-col col-auto'>
                            <p class='mb-1'>
                              <b>0 SEK</b>
                            </p>
                          </div>
                        </div>
                        <div class='row justify-content-between'>
                          <div class='col-4'>
                            <p>
                              <b>Total</b>
                            </p>
                          </div>
                          <div class='flex-sm-col col-auto'>
                            <p class='mb-1'>
                              <b>537 SEK</b>
                            </p>{' '}
                          </div>
                        </div>
                        <hr class='my-0'></hr>
                      </div>
                    </div>
                    <div class='row mb-5 mt-4 '>
                      <div class='col-md-7 col-lg-6 mx-auto'>
                        <button
                          type='button'
                          class='btn btn-block btn-outline-primary btn-lg'
                        >
                          ADD GIFT CODE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
