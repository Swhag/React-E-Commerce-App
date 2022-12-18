import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { shoesImage, shoesData } from '../store/data';
import { addItem } from '../store/store';
import '../styles/App.css';

import Details from '../pages/Detail';
import Cart from '../pages/Cart';
import TopNavbar from './Navbar';
import Hero from './Hero';
import Categories from './Categories';
import Services from './Services';
import Footer from './Footer';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let [loadBtn, setLoadBtn] = useState('Load More');
  let [loaded, setLoaded] = useState(0);

  let productList = [
    'https://swhag.github.io/shoesData.json',
    'https://swhag.github.io/shoesData2.json',
  ];

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

                <div className='button-container'>
                  <button
                    className='btn btn-secondary'
                    type='button'
                    onClick={() => {
                      loaded < productList.length
                        ? axios
                            .get(productList[loaded])
                            .then((res) => {
                              let shoesDataCopy = [...shoes, ...res.data];

                              setShoes(shoesDataCopy);
                              setLoaded(loaded + 1);
                            })
                            .catch(() => {
                              console.error('Failed to Fetch Data');
                            })
                        : setShoes(shoesData);
                      setLoaded(0);
                    }}
                  >
                    {loadBtn}
                  </button>
                </div>

                <Services></Services>
              </>
            }
          />
          ---------------------------------------------------
          <Route
            path='/detail/:id'
            element={
              <>
                <Details shoes={shoes} shoesImage={shoesImage}></Details>
              </>
            }
          />
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

export default App;
