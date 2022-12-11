import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import { data, bg, imageData } from './data';
import '../styles/App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <TopNavbar></TopNavbar>
              <Hero></Hero>
              <Products></Products>
            </>
          }
        />
        <Route
          path='/detail'
          element={
            <>
              <TopNavbar></TopNavbar>
              <Details></Details>
            </>
          }
        />
      </Routes>
    </div>
  );
}

function TopNavbar() {
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand className='site-name' href='/'>
          KickStore
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='detail'>Detail</Nav.Link>
          <Nav.Link href='#cart'>Cart</Nav.Link>
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

function Products() {
  let [shoes] = useState(data);
  let [shoesImage] = useState(imageData);

  return (
    <>
      <div className='container'>
        <div className='row'>
          {shoes.map((shoe, i) => {
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
      <img src={props.shoesImage} width='80%' />
      <h4>{props.shoes.title}</h4>
      <p>${props.shoes.price}</p>
    </div>
  );
}

function Details() {
  let [shoesImage] = useState(imageData);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={shoesImage[0]} width='100%' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>Product Name</h4>
          <p>More Information</p>
          <p>$70</p>
          <button className='btn btn-danger'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
