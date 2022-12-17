function MyNavbar() {
  let navigate = useNavigate();

  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand
          className='site-name'
          onClick={() => {
            navigate('/');
          }}
        >
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
