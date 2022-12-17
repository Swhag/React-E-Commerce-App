import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { shoesImage, shoesData } from './data';
import { addItem } from '../store/store';
import Details from '../pages/Detail';
import Cart from '../pages/Cart';
import TopNavbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import '../styles/App.css';

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
      <div className='container'>
        <TopNavbar></TopNavbar>

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero></Hero>
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
          <Route path='/about' element={<About />}>
            <Route path='member' element={<>Staff Members</>} />
            <Route path='location' element={<>Store location</>} />
          </Route>
          <Route path='*' element={<>Error 404: Unable to reach this page</>} />
        </Routes>

        <Footer></Footer>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>About Page</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Products(props) {
  let [fadeIn, setFadeIn] = useState('');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <>
      <div className={`container start ${fadeIn}`}>
        <div className='row product-row'>
          {props.shoes.map((shoe, i) => {
            return (
              <ProductCard key={i} id={shoe.id} shoes={shoe}></ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div className='col-md-4 product-card'>
      <img
        className='product-image'
        src={shoesImage[props.id]}
        alt='#'
        width='80%'
        onClick={() => {
          navigate(`/detail/` + props.id);
        }}
      />
      <h4>{props.shoes.name}</h4>
      <p>${props.shoes.price}</p>
      <button
        className='btn add-btn'
        onClick={() => {
          dispatch(addItem(props.shoes));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default App;
