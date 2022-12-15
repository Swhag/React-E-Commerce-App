import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { bg, shoesImage, shoesData } from './data';
import { sortByName, sortByNameReverse } from './utils';
import Details from '../pages/Detail';
import Cart from '../pages/Cart';
import Footer from '../pages/Footer';
import '../styles/App.css';
import '../styles/icomoon.css';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let [sorted, setSorted] = useState(false);
  let [loadBtn, setLoadBtn] = useState('Load More');
  let [loaded, setLoaded] = useState(0);

  let productList = [
    'https://swhag.github.io/shoesData.json',
    'https://swhag.github.io/shoesData2.json',
  ];

  return (
    <div className='App'>
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

                <button
                  className='btn btn-secondary'
                  onClick={() => {
                    let shoesDataCopy = [...shoes];

                    sorted
                      ? setShoes(sortByNameReverse(shoesDataCopy))
                      : setShoes(sortByName(shoesDataCopy));

                    setSorted(!sorted);
                  }}
                >
                  Sort by Name
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

function TopNavbar() {
  let navigate = useNavigate();

  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand className='site-name' href='/'>
          KickStore
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/detail/0');
            }}
          >
            Details
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/about');
            }}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate('/cart');
            }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Hero() {
  return (
    <div
      className='main-bg'
      style={{ backgroundImage: 'url(' + bg + ')' }}
    ></div>
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
              <ProductCard
                key={shoe.id}
                id={shoe.id}
                shoes={shoe}
                shoesImage={shoesImage}
              ></ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();

  return (
    <div className='col-md-4 product-card'>
      <img
        className='product-image'
        src={props.shoesImage[props.id]}
        alt='#'
        width='80%'
        onClick={() => {
          navigate(`/detail/` + props.id);
        }}
      />
      <h4>{props.shoes.title}</h4>
      <p>${props.shoes.price}</p>
      <button className='btn add-btn'>Add to Cart</button>
    </div>
  );
}

export default App;
