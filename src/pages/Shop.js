import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/store';
import axios from 'axios';

import { shoesImage } from '../store/data';

function ShopPage() {
  let [fadeIn, setFadeIn] = useState('');
  let [shoes, setShoes] = useState([]);

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  useEffect(() => {
    axios
      .get('https://Swhag.github.io/shoesData1.json')
      .then((res) => {
        let shoesDataCopy = [...res.data];
        setShoes(shoesDataCopy);
      })
      .catch(() => {
        console.error('Failed to Fetch Data');
      });
  }, []);

  return (
    <div className={`container start ${fadeIn}`}>
      <ShopHeader></ShopHeader>
      <section className='py-5'>
        <div className='container p-0'>
          <div className='row'>
            <ShopMenu></ShopMenu>
            <div className='col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
              <ProductHeader></ProductHeader>
              <Products shoes={shoes}></Products>
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
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Fashion</strong>
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
          Health & Beauty
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

function MenuCheckBox() {
  let [menu4] = useState([`In Stock`, `Returns Accepted`, `Deals & Savings`]);

  return (
    <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5 shop-check-box'>
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
    </ul>
  );
}

function MenuRadio() {
  let [menu5] = useState([`All Listings`, `Auction`, `Buy It Now`]);

  return (
    <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5 shop-radio'>
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
    </ul>
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
              className='selectpicker form-control form-control-sm'
              data-customclass='form-control form-control-sm'
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

function Products(props) {
  return (
    <section className='pt-5 shop-product-container'>
      <div className='row'>
        <div className='container page-wrapper shop-page-wrapper'>
          <div className='page-inner'>
            <div className='row'>
              {props.shoes.map((shoe, i) => {
                return (
                  <ProductCard key={i} id={shoe.id} shoes={shoe}></ProductCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <div className='el-wrapper shop-el-wrapper '>
      <div className='box-up'>
        <img
          className='img product-image'
          src={props.shoes.imageURL}
          alt='#'
          width='70%'
          onClick={() => {
            navigate(`/detail/` + props.id);
          }}
        />
        <div className='img-info'>
          <div className='info-inner'>
            <span className='p-name'>{props.shoes.name}</span>
            <span className='p-company'>{props.shoes.brand}</span>
          </div>
          <div className='a-size'>
            Available sizes :<span className='size'>8.5 / 9 / 10 / 11</span>
          </div>
        </div>
      </div>

      <div className='box-down'>
        <div className='h-bg'>
          <div className='h-bg-inner'></div>
        </div>

        <a
          className='cart'
          href='#!'
          onClick={() => {
            dispatch(addItem(props.shoes));
          }}
        >
          <span className='price'>${props.shoes.price}</span>
          <span className='add-to-cart'>
            <span className='txt'>Add in cart</span>
          </span>
        </a>
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

export default ShopPage;
