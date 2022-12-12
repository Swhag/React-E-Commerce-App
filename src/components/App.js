import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { bg, shoesImage, shoesData } from './data';
import Details from '../pages/detail';
import '../styles/App.css';

function App() {
  let [shoes, setShoes] = useState(shoesData);

  return (
    <div className='App'>
      <TopNavbar></TopNavbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Hero></Hero>
              <Button
                className='sort-button'
                variant='danger'
                shoes={shoes}
                onClick={() => {
                  let shoesDataCopy = [...shoes];
                  shoesDataCopy.sort((a, b) => {
                    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
                  });
                  setShoes(shoesDataCopy);
                  console.log(shoes);

                  console.log(shoes.find((x) => x.id === 2));
                }}
              >
                Sort by Name
              </Button>
              <Products shoes={shoes}></Products>
            </>
          }
        />
        <Route
          path='/detail/:id'
          element={
            <>
              <Details shoes={shoes} shoesImage={shoesImage}></Details>
            </>
          }
        />

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
            Featured
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
        <div className='row'>
          {props.shoes.map((shoe, i) => {
            return (
              <ProductCard
                key={shoe.id}
                shoes={shoe}
                shoesImage={shoesImage[i]}
              ></ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

function ProductCard(props) {
  return (
    <div className='col-md-4 product-card'>
      <img src={props.shoesImage} alt='#' width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>${props.shoes.price}</p>
    </div>
  );
}

export default App;
