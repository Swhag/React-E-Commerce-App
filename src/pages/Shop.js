import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addItem } from '../redux/cartSlice';
import { setPage, setIndex } from '../redux/pageSlice';
import {
  setItems,
  sortByBrand,
  sortByGender,
  sortByLimited,
  doubleCondition,
  multipleCondition,
  sortDefault,
  sortLowToHigh,
  sortHighToLow,
} from '../redux/itemSlice';
import { updateCartCount } from '../redux/cartSlice';

function ShopPage(props) {
  let state = useSelector((state) => state);
  let [fadeIn, setFadeIn] = useState('');
  let [sortOption, setSortOption] = useState('Sort By');
  let setSidebar = props.setSidebar;

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`container start ${fadeIn} main-container`}>
      <ShopHeader></ShopHeader>
      <section className='py-5'>
        <div className='row'>
          <ShopMenu setSortOption={setSortOption}></ShopMenu>
          <div className='col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0'>
            <ProductHeader
              items={state.items.sorted}
              sortOption={sortOption}
              setSortOption={setSortOption}
            ></ProductHeader>
            <Products
              items={state.items.sorted}
              setSidebar={setSidebar}
            ></Products>
            <PageButtons items={state.items.sorted}></PageButtons>
          </div>
        </div>
      </section>
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
                className='shop-header-nav'
                onClick={() => {
                  dispatch(setItems(state.items.data));
                  dispatch(setPage(1));
                  dispatch(setIndex());
                }}
              >
                SHOP
              </span>
            </h1>
          </div>
          <div className='col-lg-6 text-lg-end'>
            <ol className='breadcrumb justify-content-lg-end mb-0 px-0 bg-light'>
              <li className='breadcrumb-item'>
                <div
                  className='text-dark shop-header-nav'
                  onClick={() => {
                    navigate('/');
                    window.scrollTo(0, 0);
                  }}
                >
                  Home
                </div>
              </li>
              <li className='breadcrumb-item shop-header-nav active'>Shop</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductHeader(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let total = props.items.length;
  let startIndex = state.page.index + 1;
  let endIndex = state.page.index + state.page.itemsPerPage;
  let sortOption = props.sortOption;
  let setSortOption = props.setSortOption;

  if (endIndex > total) {
    endIndex = props.items.length;
  }

  let options = [
    'Sort By',
    'Default',
    'Price: Low to High',
    'Price: High to Low',
  ];

  function sortItems(e) {
    if (e.target.value === 'Default') {
      dispatch(sortDefault(state.items.sorted));
    } else if (e.target.value === 'Price: Low to High') {
      dispatch(sortLowToHigh(state.items.sorted));
    } else if (e.target.value === 'Price: High to Low') {
      dispatch(sortHighToLow(state.items.sorted));
    }
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
            <select
              className='selectpicker form-control form-control-sm'
              value={sortOption}
              onChange={(e) => {
                sortItems(e);
                setSortOption(e.target.value);
              }}
            >
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {options[i]}
                </option>
              ))}
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Products(props) {
  let state = useSelector((state) => state);
  let items = props.items;
  let index = state.page.index;
  let itemsPerPage = state.page.itemsPerPage;
  let setSidebar = props.setSidebar;

  return (
    <div className='container'>
      <div className='row'>
        {items.slice(index, index + itemsPerPage).map((item, i) => {
          return (
            <ProductCard
              key={i}
              id={item.id}
              item={item}
              setSidebar={setSidebar}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let item = props.item;
  let setSidebar = props.setSidebar;

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
                  window.scrollTo(0, 0);
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

          <div
            className='cart'
            onClick={() => {
              dispatch(addItem(item));
              dispatch(updateCartCount());
              setSidebar('show');
            }}
          >
            <span className='price'>${item.price}</span>
            <span className='add-to-cart'>
              <span className='txt'>Add to cart</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShopMenu(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let setSortOption = props.setSortOption;

  return (
    <div className='col-lg-3 order-2 order-lg-1'>
      <h5 className='text-uppercase mb-4'>Categories</h5>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>
          Sneakers & Athletic
        </strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal '>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'WOMEN', 'CASUAL']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Women's Casual
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'MEN', 'CASUAL']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Men's Casual
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(
                multipleCondition([
                  state.items.data,
                  'WOMEN',
                  ['RUNNING', 'FOOTBALL', 'BASKETBALL'],
                ])
              );
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Women's Athletic
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(
                multipleCondition([
                  state.items.data,
                  'MEN',
                  ['RUNNING', 'FOOTBALL', 'BASKETBALL'],
                ])
              );
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Men's Athletic
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByGender([state.items.data, 'KIDS']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Kids
          </div>
        </li>
      </ul>
      <ShopMenu2 setSortOption={setSortOption}></ShopMenu2>
      <ShopMenu3 setSortOption={setSortOption}></ShopMenu3>
      <MenuCheckBox></MenuCheckBox>
      <MenuRadio></MenuRadio>
    </div>
  );
}

function ShopMenu2(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let setSortOption = props.setSortOption;

  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Brand</strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal'>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'NIKE']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Nike
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'ADIDAS']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Adidas
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'HUSHPUPPIES']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Hush Puppies
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'VANS']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Vans
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByBrand([state.items.data, 'AIR JORDAN']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Air Jordan
          </div>
        </li>
      </ul>
    </>
  );
}

function ShopMenu3(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let setSortOption = props.setSortOption;

  return (
    <>
      <div className='py-2 px-4 bg-light mb-3'>
        <strong className='small text-uppercase fw-bold'>Fashion</strong>
      </div>
      <ul className='list-unstyled small text-muted ps-lg-4 font-weight-normal mb-5'>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'WOMEN', 'FORMAL']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Women's Formal
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(doubleCondition([state.items.data, 'MEN', 'FORMAL']));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Men's Formal
          </div>
        </li>
        <li className='mb-2 shop-menu-items'>
          <div
            onClick={() => {
              dispatch(sortByLimited(state.items.data));
              dispatch(setPage(1));
              dispatch(setIndex());
              setSortOption('Sort By');
            }}
          >
            Limited Edition
          </div>
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

function PageButtons(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  // Calculates # of page by dividing the total # of items by # of items to show
  // let currentPage = state.page.page;
  let itemsPerPage = state.page.itemsPerPage;
  let totalPageCount = Math.ceil(props.items.length / itemsPerPage);

  let [pageStart, setPageStart] = useState(1);
  let [pageEnd, setPageEnd] = useState(6);

  function handlePrev() {
    // only runs if the resulting pageStart is greater than 1
    if (pageStart - 6 > 0) {
      setPageStart((prevPageStart) => prevPageStart - 6);
      setPageEnd((prevPageEnd) => prevPageEnd - 6);
      dispatch(setPage(pageEnd - 6));
      dispatch(setIndex());
    } else return;
  }

  function handleNext() {
    // only runs if the pageEnd is less than totalPageCount value
    if (pageEnd < totalPageCount) {
      setPageStart((prevPageStart) => prevPageStart + 6);
      setPageEnd((prevPageEnd) => prevPageEnd + 6);
      dispatch(setPage(pageStart + 6));
      dispatch(setIndex());
    } else return;
  }

  function resetPagination() {
    setPageStart(1);
    setPageEnd(6);
  }

  function highlightPageButton(currentPage) {
    const PageButtons = document.querySelectorAll('.page-buttons');

    for (let i = 0; i < PageButtons.length; i++) {
      PageButtons[i].classList.remove('selected-button');

      if (i + 1 === currentPage) {
        PageButtons[i].classList.add('selected-button');
      }
    }
  }

  useEffect(() => {
    resetPagination();
  }, [totalPageCount]);

  useEffect(() => {
    highlightPageButton(state.page.page);
  }, [state.page.page]);

  return (
    <div className='button-container'>
      <ul className='pagination justify-content-center justify-content-lg-end'>
        <li className='page-item mx-1'>
          <div
            className='page-link'
            onClick={() => {
              handlePrev();
            }}
          >
            «
          </div>
        </li>

        {/* Creates an array consisting of undefined items for iteration */}
        {[...Array(totalPageCount)].map((item, i) => {
          // only generates page buttons that are between pageStart and pageEnd value
          return i + 1 >= pageStart && i + 1 <= pageEnd ? (
            <li className='page-item mx-1' key={i}>
              <div
                className='page-link page-buttons'
                onClick={(e) => {
                  dispatch(setPage(i + 1));
                  dispatch(setIndex());
                }}
              >
                {i + 1}
              </div>
            </li>
          ) : (
            <li className='page-item mx-1 hide' key={i}>
              <div
                className='page-link page-buttons'
                onClick={(e) => {
                  dispatch(setPage(i + 1));
                  dispatch(setIndex());
                }}
              >
                H{i + 1}
              </div>
            </li>
          );
        })}
        <li className='page-item ms-1'>
          <div
            className='page-link'
            onClick={() => {
              handleNext();
            }}
          >
            »
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ShopPage;
