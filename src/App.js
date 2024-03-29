import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { trendingOne, trendingTwo } from './data/data';
import { setCart, addItem } from './redux/cartSlice';
import { setItems } from './redux/itemSlice';
import { updateCartCount } from './redux/cartSlice';
import './styles/App.css';

import TopNavbar from './components/Navbar';
import LoginModal from './components/Login';
import Slider from './components/Slider';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import ShopPage from './pages/Shop';
import DetailsPage from './pages/Detail';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [trending, setTrending] = useState(trendingOne);
  let [login, setLogin] = useState('');
  let [sidebar, setSidebar] = useState('hidden');
  let [detailItem, setDetailItem] = useState({});

  useEffect(() => {
    const fetchShoes = async () => {
      const res = await axios.get(
        'https://raw.githubusercontent.com/Swhag/React-E-Commerce-App/main/src/data/shoesData1.json'
      );
      let itemsDataCopy = [...res.data];

      dispatch(setItems(itemsDataCopy));
    };
    fetchShoes();
  }, []);

  useEffect(() => {
    dispatch(updateCartCount());
  }, []);

  const getCart = () => {
    let cartState = state.cart.items;

    if (localStorage.getItem('ecommCart')) {
      dispatch(setCart(JSON.parse(localStorage.getItem('ecommCart'))));
    } else localStorage.setItem('ecommCart', JSON.stringify(cartState));
  };

  return (
    <div className='App'>
      <LoginModal login={login} setLogin={setLogin}></LoginModal>
      <TopNavbar
        setLogin={setLogin}
        getCart={getCart}
        setSidebar={setSidebar}
      ></TopNavbar>
      <div className='container main-container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner></Banner>

                <Categories></Categories>
                <Products items={trending} setSidebar={setSidebar}></Products>
                <div className='button-container'>
                  <ul className='pagination justify-content-center justify-content-lg-end'>
                    <li className='page-item mx-1'>
                      <div
                        className='page-link'
                        onClick={() => {
                          setTrending(trendingOne);
                        }}
                      >
                        <span>«</span>
                      </div>
                    </li>

                    <li className='page-item ms-1'>
                      <div
                        className='page-link'
                        onClick={() => {
                          setTrending(trendingTwo);
                        }}
                      >
                        <span>»</span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <Slider></Slider> */}
                <Services></Services>
              </>
            }
          />
          ---------------------------------------------------
          <Route
            path='/shop'
            element={<ShopPage setSidebar={setSidebar}></ShopPage>}
          ></Route>
          ---------------------------------------------------
          <Route
            path='/detail/:id'
            element={
              <DetailsPage
                setSidebar={setSidebar}
                detailItem={detailItem}
                setDetailItem={setDetailItem}
              ></DetailsPage>
            }
          ></Route>
          ---------------------------------------------------
          <Route
            path='/checkout'
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          ---------------------------------------------------
          <Route
            path='/cart'
            element={
              <>
                <CartPage></CartPage>
              </>
            }
          ></Route>
          ---------------------------------------------------
          <Route
            path='*'
            element={
              <>Error 404: Unable to reach this page - still working on it</>
            }
          />
        </Routes>
      </div>
      <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        setDetailItem={setDetailItem}
      ></Sidebar>
      <Footer></Footer>
    </div>
  );
}

function Products(props) {
  const { items, setSidebar } = props;

  return (
    <section className='pt-5 product-container'>
      <header className='text-center'>
        <p className='small text-muted small text-uppercase mb-1'>
          The Style Room
        </p>
        <h2 className='h5 text-uppercase mb-4'>TOP TRENDING PRODUCTS </h2>
      </header>
      <div className='container'>
        <div className='row'>
          {items.map((item, i) => {
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
    </section>
  );
}

function ProductCard(props) {
  const { id, item, setSidebar } = props;

  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <div className='col-lg-3 col-sm-6'>
      <div className='el-wrapper home-el-wrapper'>
        <div className='box-up'>
          <img
            className='img product-image'
            src={item.imageURL}
            alt='#'
            width='80%'
          />
          <div className='img-info'>
            <div className='info-inner'>
              <span
                className='p-name'
                onClick={() => {
                  navigate(`/detail/` + id);
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

export default App;
