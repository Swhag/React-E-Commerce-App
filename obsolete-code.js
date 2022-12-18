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

function MyProducts(props) {
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
              <MyProductCard key={i} id={shoe.id} shoes={shoe}></MyProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

function MyProductCard(props) {
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
