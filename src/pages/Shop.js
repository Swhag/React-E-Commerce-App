import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItem } from '../store/cartSlice';
import { setPage, setTIndex } from '../store/pageSlice';
import {
  setItems,
  sortByBrand,
  sortByGender,
  sortByLimited,
  doubleCondition,
  multipleCondition,
} from '../store/itemSlice';
import { updateCartCount } from '../store/cartSlice';

function ShopPage() {
  let state = useSelector((state) => state);
  let [fadeIn, setFadeIn] = useState('');
  let [login, setLogin] = useState('');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`container start ${fadeIn}`}>
      <ShopHeader></ShopHeader>
      <section className='py-5'>
        <div className='container p-0'>
          <div className='row'>
            <ShopMenu></ShopMenu>
            <div className='col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
              <ProductHeader items={state.items.sorted}></ProductHeader>
              <Products items={state.items.sorted}></Products>
              <PageButtons items={state.items.sorted}></PageButtons>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Products(props) {
  let state = useSelector((state) => state);
  let items = props.items;
  let index = state.page.index;
  let itemsPerPage = state.page.itemsPerPage;

  return (
    <div className='container'>
      <div className='row'>
        {items.slice(index, index + itemsPerPage).map((item, i) => {
          return <ProductCard key={i} id={item.id} item={item}></ProductCard>;
        })}
      </div>
    </div>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let item = props.item;

  return (
    <div className='col-lg-4 col-sm-6'>
      <div className='el-wrapper shop-el-wrapper '>
        <div className='box-up'>
          <img
            className='img product-image'
            src={item.imageURL}
            alt='#'
            width='70%'
          />
          <div className='img-info'>
            <div className='info-inner'>
              <span
                className='p-name'
                onClick={() => {
                  navigate(`/detail/` + props.id);
                }}
              >
                {item.name}
              </span>
              <span className='p-company'>{item.brand}</span>
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
              dispatch(addItem(item));
              dispatch(updateCartCount());
            }}
          >
            <span className='price'>${item.price}</span>
            <span className='add-to-cart'>
              <span className='txt'>Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ShopHeader() {
  let state = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <section className='py-5 bg-light'>
      <div className='container'>
        <div className='row px-4 px-lg-5 py-lg-4 align-items-center'>
          <div className='col-lg-6'>
            <h1 className='h2 mb-0 '>
              <span
                className='shop-header'
                onClick={() => {
                  dispatch(setItems(state.items.data));
                  dispatch(setPage(1));
                  dispatch(setTIndex());
                }}
              >
                SHOP
              </span>
            </h1>
          </div>
          <div className='col-lg-6 text-lg-end'>
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
              <li className='breadcrumb-item active'>Shop</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
function ShopMenu() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div className='col-lg-3 order-2 order-lg-1'>
      <h5 className='text-uppercase mb-4'>Categories</h5>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>
          Sneakers & Athletic
        </strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal'>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'WOMEN', 'CASUAL']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Women's Casual
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'MEN', 'CASUAL']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Men's Casual
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(
                multipleCondition([
                  state.items.data,
                  'WOMEN',
                  ['RUNNING', 'FOOTBALL', 'BASKETBALL'],
                ])
              );
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Women's athletic
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(
                multipleCondition([
                  state.items.data,
                  'MEN',
                  ['RUNNING', 'FOOTBALL', 'BASKETBALL'],
                ])
              );
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Men's athletic
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByGender([state.items.data, 'KIDS']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Kids
          </a>
        </li>
      </ul>
      <ShopMenu2></ShopMenu2>
      <ShopMenu3></ShopMenu3>
      <MenuCheckBox></MenuCheckBox>
      <MenuRadio></MenuRadio>
    </div>
  );
}

function ShopMenu2() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Brand</strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal'>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'NIKE']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Nike
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'ADIDAS']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Adidas
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'HUSHPUPPIES']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Hush Puppies
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'VANS']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Vans
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'AIR JORDAN']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Air Jordan
          </a>
        </li>
      </ul>
    </>
  );
}

function ShopMenu3() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Fashion</strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5'>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'WOMEN', 'FORMAL']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Women's Formal
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'MEN', 'FORMAL']));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Men's Formal
          </a>
        </li>
        <li className='mb-2'>
          <a
            className='reset-anchor'
            href='#!'
            onClick={() => {
              dispatch(sortByLimited(state.items.data));
              dispatch(setPage(1));
              dispatch(setTIndex());
            }}
          >
            Limited Edition
          </a>
        </li>
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

function ProductHeader(props) {
  let state = useSelector((state) => state);
  let total = props.items.length;
  let startIndex = state.page.index + 1;
  let endIndex = state.page.index + state.page.itemsPerPage;

  if (endIndex > total) {
    endIndex = props.items.length;
  }

  return (
    <div className='row mb-3 align-items-center'>
      <div className='col-lg-6 mb-2 mb-lg-0'>
        <p className='text-sm text-muted mb-0'>
          {`Showing ${startIndex}-${endIndex} of
          ${total} results`}
        </p>
      </div>
      <div className='col-lg-6'>
        <ul className='list-inline d-flex align-items-center justify-content-lg-end mb-0'>
          <li className='list-inline-item'>
            <select className='selectpicker form-control form-control-sm'>
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

function PageButtons(props) {
  // Calculates # of page by dividing the total # of items by # of items to show
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let itemsPerPage = state.page.itemsPerPage;
  let pageCount = Math.ceil(props.items.length / itemsPerPage);

  return (
    <div className='button-container'>
      <ul className='pagination justify-content-center justify-content-lg-end'>
        <li className='page-item mx-1'>
          <a className='page-link' href='#!'>
            «
          </a>
        </li>

        {/* Creates an array consisting of undefined items for iteration */}
        {[...Array(pageCount)].map((item, i) => {
          return (
            <li className='page-item mx-1' key={i}>
              <a
                className='page-link'
                href='#!'
                onClick={() => {
                  dispatch(setPage(i + 1));
                  dispatch(setTIndex());
                }}
              >
                {i + 1}
              </a>
            </li>
          );
        })}
        <li className='page-item ms-1'>
          <a className='page-link' href='#!'>
            »
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ShopPage;
