import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { shoesImage, shoesData } from '../store/data';
import { addItem } from '../store/store';
import '../styles/App.css';

import TopNavbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import Services from './Services';
import Footer from './Footer';

import ShopPage from '../pages/Shop';
import DetailsPage from '../pages/Detail';
import Cart from '../pages/Cart';

function App() {
  let [shoes, setShoes] = useState(shoesData);

  return (
    <div className='App'>
      <TopNavbar></TopNavbar>
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero></Hero>
                <Categories></Categories>
                <Products shoes={shoes}></Products>
                <PageButtons></PageButtons>
                <Services></Services>
              </>
            }
          />
          ---------------------------------------------------
          <Route
            path='/detail/:id'
            element={
              <DetailsPage shoes={shoes} shoesImage={shoesImage}></DetailsPage>
            }
          ></Route>
          ---------------------------------------------------
          <Route
            path='/shop'
            element={
              <ShopPage shoes={shoes} shoesImage={shoesImage}></ShopPage>
            }
          ></Route>
          ---------------------------------------------------
          <Route
            path='/cart'
            element={
              <>
                <Cart></Cart>
              </>
            }
          ></Route>
          ---------------------------------------------------
          <Route
            path='*'
            element={
              <>
                Error 404: Unable to reach this page - still working on it bruh
              </>
            }
          />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

function Products(props) {
  return (
    <section className='pt-5 product-container'>
      <header className='text-center'>
        <p className='small text-muted small text-uppercase mb-1'>
          The Style Room
        </p>
        <h2 className='h5 text-uppercase mb-4'>TOP TRENDING PRODUCTS </h2>
      </header>
      <div className='row'>
        <div className='container page-wrapper'>
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
    <div className='el-wrapper'>
      <div className='box-up'>
        <img
          className='img product-image'
          src={shoesImage[props.id]}
          alt='#'
          width='80%'
          onClick={() => {
            navigate(`/detail/` + props.id);
          }}
        />
        <div className='img-info'>
          <div className='info-inner'>
            <span className='p-name'>{props.shoes.name}</span>
            <span className='p-company'>Brand Name</span>
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
  let [page, setPage] = useState(0);
  let [isActive, setActive] = useState(false);
  let [shoes, setShoes] = useState(shoesData);

  let productList = [
    'https://swhag.github.io/shoesData.json',
    'https://swhag.github.io/shoesData2.json',
  ];

  return (
    <div className='button-container'>
      <nav aria-label='Page navigation example'>
        <ul className='pagination justify-content-center justify-content-lg-end'>
          <li className='page-item mx-1'>
            <a
              className='page-link'
              href='#!'
              aria-label='Previous'
              onClick={() => {
                console.log('clicked prev');
              }}
            >
              <span aria-hidden='true'>«</span>
            </a>
          </li>
          <li className='page-item mx-1 active'>
            <a
              className='page-link'
              href='#!'
              onClick={() => {
                console.log('clicked 1');
              }}
            >
              1
            </a>
          </li>
          <li className='page-item mx-1'>
            <a
              className='page-link'
              href='#!'
              onClick={() => {
                console.log('clicked 2');
              }}
            >
              2
            </a>
          </li>
          <li className='page-item mx-1'>
            <a
              className='page-link'
              href='#!'
              onClick={() => {
                console.log('clicked 3');
              }}
            >
              3
            </a>
          </li>
          <li className='page-item ms-1'>
            <a
              className='page-link'
              href='#!'
              aria-label='Next'
              onClick={() => {
                console.log('clicked next');
              }}
            >
              <span aria-hidden='true'>»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
