// function MyNavbar() {
//   let navigate = useNavigate();

//   return (
//     <Navbar bg='light' variant='light'>
//       <Container>
//         <Navbar.Brand
//           className='site-name'
//           onClick={() => {
//             navigate('/');
//           }}
//         >
//           KickStore
//         </Navbar.Brand>
//         <Nav className='me-auto'>
//           <Nav.Link
//             onClick={() => {
//               navigate('/');
//             }}
//           >
//             Home
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => {
//               navigate('/detail/0');
//             }}
//           >
//             Details
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => {
//               navigate('/about');
//             }}
//           >
//             About
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => {
//               navigate('/cart');
//             }}
//           >
//             Cart
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// function Hero() {
//   return (
//     <div
//       className='main-bg'
//       style={{ backgroundImage: 'url(' + bg + ')' }}
//     ></div>
//   );
// }

// function MyProducts(props) {
//   let [fadeIn, setFadeIn] = useState('');

//   useEffect(() => {
//     setFadeIn('end');

//     return () => {
//       setFadeIn('');
//     };
//   }, []);

//   return (
//     <>
//       <div className={`container start ${fadeIn}`}>
//         <div className='row product-row'>
//           {props.shoes.map((shoe, i) => {
//             return (
//               <MyProductCard key={i} id={shoe.id} shoes={shoe}></MyProductCard>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// function MyProductCard(props) {
//   let navigate = useNavigate();
//   let state = useSelector((state) => state);
//   let dispatch = useDispatch();

//   return (
//     <div className='col-md-4 product-card'>
//       <img
//         className='product-image'
//         src={shoesImage[props.id]}
//         alt='#'
//         width='80%'
//         onClick={() => {
//           navigate(`/detail/` + props.id);
//         }}
//       />
//       <h4>{props.shoes.name}</h4>
//       <p>${props.shoes.price}</p>
//       <button
//         className='btn add-btn'
//         onClick={() => {
//           dispatch(addItem(props.shoes));
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

{
  /* <div className='button-container'>
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
</div>; */
}

// ----------------------------------------------

function ProductCard() {
  return (
    <div className='row'>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-1.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Kui Ye Chen’s AirPods
            </a>
          </h6>
          <p className='small text-muted'>$250</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-2.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Air Jordan 12 gym red
            </a>
          </h6>
          <p className='small text-muted'>$300</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-primary'>New</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-3.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Cyan cotton t-shirt
            </a>
          </h6>
          <p className='small text-muted'>$25</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-4.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Timex Unisex Originals
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-info'>Sale</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-5.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Red digital smartwatch
            </a>
          </h6>
          <p className='small text-muted'>$250</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-6.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Nike air max 95
            </a>
          </h6>
          <p className='small text-muted'>$300</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-7.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Joemalone Women prefume
            </a>
          </h6>
          <p className='small text-muted'>$25</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-8.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Apple Watch
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-danger'>Sold</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-9.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className='reset-anchor' href='detail.html'>
              Men silver Byron Watch
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-primary'>New</div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-10.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Ploaroid one step camera
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-11.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            {' '}
            <a className='reset-anchor' href='detail.html'>
              Gray Nike running shoes
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
      <div className='col-lg-4 col-sm-6'>
        <div className='product text-center'>
          <div className='mb-3 position-relative'>
            <div className='badge text-white bg-'></div>
            <a className='d-block' href='detail.html'>
              <img
                className='img-fluid w-100'
                src='img/product-12.jpg'
                alt='...'
              ></img>
            </a>
            <div className='product-overlay'>
              <ul className='mb-0 list-inline'>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-outline-dark' href='#!'>
                    <i className='far fa-heart'></i>
                  </a>
                </li>
                <li className='list-inline-item m-0 p-0'>
                  <a className='btn btn-sm btn-dark' href='cart.html'>
                    Add to cart
                  </a>
                </li>
                <li className='list-inline-item mr-0'>
                  <a
                    className='btn btn-sm btn-outline-dark'
                    href='#productView'
                    data-bs-toggle='modal'
                  >
                    <i className='fas fa-expand'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h6>
            <a className='reset-anchor' href='detail.html'>
              Black DSLR lense
            </a>
          </h6>
          <p className='small text-muted'>$351</p>
        </div>
      </div>
    </div>
  );
}
