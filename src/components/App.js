import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { bg, shoesImage, shoesData } from './data';
import { sortByName, sortByNameReverse } from './utils';
import Details from '../pages/detail';
import '../styles/App.css';
import axios from 'axios';

function App() {
  useEffect(() => {});

  let [shoes, setShoes] = useState(shoesData);
  let [sorted, setSorted] = useState(false);
  let [fetched, setFetched] = useState();

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
                    let shoesDataCopy = [...shoes];

                    axios
                      .get('https://swhag.github.io/shoesData.json')
                      .then((res) => {
                        setFetched(res.data);
                        console.log(fetched);
                      })
                      .catch(() => {
                        console.error('Data request failed');
                      });
                  }}
                >
                  Load More
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
        ---------------------------------------------------
        <Route path='/about' element={<About />}>
          <Route path='member' element={<>Staff Members</>} />
          <Route path='location' element={<>Store location</>} />
        </Route>
        <Route path='*' element={<>Error 404: Unable to reach this page</>} />
      </Routes>
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
  return (
    <>
      <div className='container'>
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
