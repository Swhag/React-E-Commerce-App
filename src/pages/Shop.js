import React, { useState, useEffect } from 'react';

function Shop() {
  return (
    <div className='container'>
      <ShopHeader></ShopHeader>
      <section className='py-5'>
        <div className='container p-0'>
          <div className='row'>
            <ShopMenu></ShopMenu>
            <div className='col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
              <ProductHeader></ProductHeader>
              <ProductCard></ProductCard>
              <PageButtons></PageButtons>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopHeader() {
  return (
    <section className='py-5 bg-light'>
      <div className='container'>
        <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
          <div className='col-lg-6'>
            <h1 className='h2 text-uppercase mb-0'>Shop</h1>
          </div>
          <div className='col-lg-6 text-lg-end'>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb justify-content-lg-end mb-0 px-0 bg-light'>
                <li className='breadcrumb-item'>
                  <a className='text-dark' href='index.html'>
                    Home
                  </a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Shop
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
function ShopMenu() {
  let [menu] = useState([
    `Women's T-Shirts`,
    `Men's T-Shirts`,
    `Dresses`,
    `Novelty socks`,
    `Women's sunglasses`,
    `Men's sunglasses`,
  ]);

  return (
    <div className='col-lg-3 order-2 order-lg-1'>
      <h5 className='text-uppercase mb-4'>Categories</h5>
      <div className='py-2 px-4 bg-dark text-white mb-3'>
        <strong className='small text-uppercase fw-bold'>
          Fashion &amp; A, icc
        </strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal'>
        {menu.map((item, i) => {
          return (
            <li className='mb-2' key={i}>
              <a className='reset-anchor' href='#!' key={i}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <ShopMenu2></ShopMenu2>
      <ShopMenu3></ShopMenu3>
      <MenuRange></MenuRange>
      <MenuCheckBox></MenuCheckBox>
      <MenuRadio></MenuRadio>
    </div>
  );
}

function ShopMenu2() {
  let [menu2] = useState([
    `Shavers`,
    `bags`,
    `Cosmetic`,
    `Nail Art`,
    `Korean cosmetics`,
  ]);
  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>
          Health &amp; Beauty
        </strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal'>
        {menu2.map((item, i) => {
          return (
            <li className='mb-2' key={i}>
              <a className='reset-anchor' href='#!' key={i}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function ShopMenu3() {
  let [menu3] = useState([
    `USB Flash drives`,
    `Headphones`,
    `Portable speakers`,
    `Keyboards`,
  ]);
  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Electronics</strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5'>
        {menu3.map((item, i) => {
          return (
            <li className='mb-2' key={i}>
              <a className='reset-anchor' href='#!'>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function MenuRange() {
  return (
    <>
      <h6 className='text-uppercase mb-4'>Price range</h6>
      <div className='price-range pt-4 mb-5'>
        <div id='range'></div>
        <div className='row pt-2'>
          <div className='col-6'>
            <strong className='small fw-bold text-uppercase'>From</strong>
          </div>
          <div className='col-6 text-end'>
            <strong className='small fw-bold text-uppercase'>To</strong>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuCheckBox() {
  let [menu4] = useState([
    `In Stock`,
    `Returns Accepted`,
    `Deals & Savings`,
    `Authorized Seller`,
  ]);

  return (
    <>
      <h6 className='text-uppercase mb-3'>Show only</h6>
      {menu4.map((item, i) => {
        return (
          <div key={i}>
            <div className='form-check mb-1'>
              <input
                className='form-check-input'
                type='checkbox'
                id={`checkbox_${i}`}
              ></input>
              <label className='form-check-label' htmlFor={`checkbox_${i}`}>
                {item}
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
}

function MenuRadio() {
  let [menu5] = useState([`All Listings`, `Auction`, `Buy It Now`]);

  return (
    <>
      <h6 className='text-uppercase mb-3'>Buying format</h6>
      {menu5.map((item, i) => {
        return (
          <div key={i}>
            <div className='form-check mb-1'>
              <input
                className='form-check-input'
                type='radio'
                name='customRadio'
                id={`radio_${i}`}
              ></input>
              <label className='form-check-label' htmlFor={`radio_${i}`}>
                {item}
              </label>
            </div>
          </div>
        );
      })}
    </>
  );
}

function ProductHeader() {
  return (
    <div className='row mb-3 align-items-center'>
      <div className='col-lg-6 mb-2 mb-lg-0'>
        <p className='text-sm text-muted mb-0'>Showing 1–12 of 53 results</p>
      </div>
      <div className='col-lg-6'>
        <ul className='list-inline d-flex align-items-center justify-content-lg-end mb-0'>
          <li className='list-inline-item text-muted me-3'>
            <a className='reset-anchor p-0' href='#!'>
              <i className='fas fa-th-large'></i>
            </a>
          </li>
          <li className='list-inline-item text-muted me-3'>
            <a className='reset-anchor p-0' href='#!'>
              <i className='fas fa-th'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <select
              className='selectpicker'
              // data-customclassName='form-control form-control-sm'
            >
              <option value>Sort By </option>
              <option value='default'>Default sorting </option>
              <option value='low-high'>Price: Low to High </option>
              <option value='high-low'>Price: High to Low </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <div className='row'>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-1.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Kui Ye Chen’s AirPods
            </a>
          </h6>
          <p className='small text-muted'>$250</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-2.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Air Jordan 12 gym red
            </a>
          </h6>
          <p className='small text-muted'>$300</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-primary'>New</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-3.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Cyan cotton t-shirt
            </a>
          </h6>
          <p className='small text-muted'>$25</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-4.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Timex Unisex Originals
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-info'>Sale</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-5.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Red digital smartwatch
            </a>
          </h6>
          <p className='small text-muted'>$250</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-6.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Nike air max 95
            </a>
          </h6>
          <p className='small text-muted'>$300</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-7.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Joemalone Women prefume
            </a>
          </h6>
          <p className='small text-muted'>$25</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-8.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Apple Watch
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-danger'>Sold</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-9.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className='reset-anchor' href='detail.html'>
              Men silver Byron Watch
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-primary'>New</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-10.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Ploaroid one step camera
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-11.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Gray Nike running shoes
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-12.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className='reset-anchor' href='detail.html'>
              Black DSLR lense
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
    </div>
  );
}

function PageButtons() {
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center justify-content-lg-end'>
        <li className='page-item mx-1'>
          <a className='page-link' href='#!' aria-label='Previous'>
            <span aria-hidden='true'>«</span>
          </a>
        </li>
        <li className='page-item mx-1 active'>
          <a className='page-link' href='#!'>
            1
          </a>
        </li>
        <li className='page-item mx-1'>
          <a className='page-link' href='#!'>
            2
          </a>
        </li>
        <li className='page-item mx-1'>
          <a className='page-link' href='#!'>
            3
          </a>
        </li>
        <li className='page-item ms-1'>
          <a className='page-link' href='#!' aria-label='Next'>
            <span aria-hidden='true'>»</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Shop;
