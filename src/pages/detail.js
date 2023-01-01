import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import axios from 'axios';

import { addItem, addItemWithQuantity } from '../redux/cartSlice';
import { updateCartCount } from '../redux/cartSlice';

function Details(props) {
  let { id } = useParams();
  let [fadeIn, setFadeIn] = useState('');
  let [tab, setTab] = useState(0);
  let [item, setItem] = useState({});
  let [moreItems, setMoreItems] = useState([]);
  let [ItemsData, setItemsData] = useState([]);
  let setSidebar = props.setSidebar;

  function getMoreItems(itemsDataCopy) {
    let currentItem = itemsDataCopy.find((item) => item.id === parseInt(id));
    let moreItems = [];

    for (let i = 0; i < itemsDataCopy.length; i++) {
      if (
        itemsDataCopy[i].category === currentItem.category &&
        itemsDataCopy[i].id !== currentItem.id &&
        itemsDataCopy[i].gender === currentItem.gender
      ) {
        moreItems.push(itemsDataCopy[i]);
      }
    }

    setMoreItems(moreItems.slice(0, 4));
  }

  useEffect(() => {
    const fetchShoes = async () => {
      const res = await axios.get('https://Swhag.github.io/shoesData1.json');
      let itemsDataCopy = [...res.data];
      setItemsData(itemsDataCopy);

      // finds item from fetched data using the ID received as URL parameter
      let currentItem = itemsDataCopy.find((item) => item.id === parseInt(id));
      setItem(currentItem);
      getMoreItems(itemsDataCopy);
    };

    fetchShoes();
  }, []);

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <>
      <div className='alert alert-warning-custom'>
        20% holiday discount ends in 7 days
      </div>

      <div className={`container bg-light detail-container start ${fadeIn}`}>
        <MainDetails item={item} setSidebar={setSidebar}></MainDetails>

        <Nav variant='tabs' defaultActiveKey='link0'>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey='link0'
            >
              Specification
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey='link1'
            >
              Shipping Info
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey='link2'
            >
              Q&A
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} shoes={item}></TabContent>
        <MoreProducts
          item={moreItems}
          setItem={setItem}
          ItemsData={ItemsData}
          getMoreItems={getMoreItems}
        ></MoreProducts>
      </div>
    </>
  );
}

function MainDetails(props) {
  let dispatch = useDispatch();
  let [quantity, setQuantity] = useState(1);
  let item = props.item;
  let setSidebar = props.setSidebar;

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function setQuantityValue(value) {
    if (/^[0-9]+$/.test(value) && value.length < 2) {
      setQuantity(parseFloat(value));
    } else if (value === '') {
      setQuantity('');
    }
  }

  return (
    // <section className='py-5'>
    <div className='container'>
      <div className='row mb-5'>
        <div className='col-lg-6 detail-image-container'>
          <div className='col-sm-10 order-1 order-sm-2'>
            <img
              className='img-fluid detail-image'
              src={item.imageURL}
              alt='#'
            ></img>
          </div>
        </div>
        {/* <!-- PRODUCT DETAILS--> */}
        <div className='col-lg-6'>
          <ul className='list-inline mb-2 text-sm'>
            <li className='list-inline-item m-0'>
              <i className='fas fa-star small text-warning'></i>
            </li>
            <li className='list-inline-item m-0 1'>
              <i className='fas fa-star small text-warning'></i>
            </li>
            <li className='list-inline-item m-0 2'>
              <i className='fas fa-star small text-warning'></i>
            </li>
            <li className='list-inline-item m-0 3'>
              <i className='fas fa-star small text-warning'></i>
            </li>
            <li className='list-inline-item m-0 4'>
              <i className='fas fa-star small text-warning'></i>
            </li>
          </ul>
          <h1>{item.name}</h1>
          <p className='lead'>${item.price}</p>
          <p className='text-sm mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Vestibulum
            ultricies aliquam convallis.
          </p>
          <div className='row align-items-stretch mb-4'>
            <div className='col-sm-5 pr-sm-0'>
              <div className='border d-flex align-items-center justify-content-between py-1 px-3 bg-white border-white'>
                <span className='small text-uppercase text-gray mr-4 no-select'>
                  Quantity
                </span>
                <div className='quantity'>
                  <button className='dec-btn p-0' onClick={decreaseQuantity}>
                    <i className='fas fa-caret-left'></i>
                  </button>
                  <input
                    className='form-control border-0 shadow-0 p-0'
                    type='text'
                    value={quantity}
                    onChange={(e) => setQuantityValue(e.target.value)}
                  ></input>
                  <button className='inc-btn p-0' onClick={increaseQuantity}>
                    <i className='fas fa-caret-right'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-sm-3 pl-sm-0'>
              <a
                className='btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0'
                href='#!'
                onClick={() => {
                  dispatch(addItemWithQuantity([item, quantity]));
                  dispatch(updateCartCount());
                  setSidebar('show');
                }}
              >
                Add to cart
              </a>
            </div>
          </div>
          <a className='text-dark p-0 mb-4 d-inline-block' href='#!'>
            <i className='far fa-heart me-2'></i>Add to wish list
          </a>
          <br></br>
          <ul className='list-unstyled small d-inline-block'>
            <li className='px-3 py-2 mb-1 bg-white'>
              <strong className='text-uppercase'>SKU:</strong>
              <span className='ms-2 text-muted'>00{item.id}</span>
            </li>
            <li className='px-3 py-2 mb-1 bg-white text-muted'>
              <strong className='text-uppercase text-dark'>Category:</strong>
              <a className='reset-anchor ms-2' href='#!'>
                {item.category}
              </a>
            </li>
            <li className='px-3 py-2 mb-1 bg-white text-muted'>
              <strong className='text-uppercase text-dark'>Gender:</strong>
              <a className='reset-anchor ms-2' href='#!'>
                {item.gender}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </section>
  );
}

function TabContent({ tab, shoes }) {
  useEffect(() => {
    setTimeout(() => {
      setFadeIn('end');
    }, 100);

    return () => {
      setFadeIn('');
    };
  }, [tab]);

  let [fadeIn, setFadeIn] = useState('');
  let content = [
    <>
      <div className='tab-content-header'>{shoes.name}</div>
      <p>
        Genuine Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
        asperiores necessitatibus nulla error dolore magni. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Dolore vitae odio consequuntur
        pariatur repellat facilis facere ipsam recusandae aliquam aliquid.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        deserunt amet rem unde odit aliquam nobis pariatur in libero
        praesentium, iure qui quis non dolore ad sint nostrum et fuga ut
        aspernatur ab natus labore. Ipsa sit nostrum et debitis cupiditate,
        laborum natus deleniti perspiciatis.
      </p>
    </>,

    // ---------------------------------------------------
    <>
      <div className='tab-content-header'>Shipping Info</div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        ducimus voluptas voluptate vero reprehenderit eos quaerat nostrum esse
        eum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugiat
        labore, voluptas corporis deserunt esse tempore blanditiis reprehenderit
        cum culpa aspernatur maxime aliquid magni voluptatum incidunt dicta
        atque? Ducimus, nemo.
      </p>
    </>,

    // ---------------------------------------------------

    <>
      <div className='tab-content-header'>Q&A Content</div>
      <p>
        Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis
        unde itaque quaerat vel! Error, inventore. Voluptatibus, obcaecati?
      </p>

      <p>
        A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem
        possimus laboriosam doloribus suscipit adipisci, assumenda repellendus
        sit et alias voluptates placeat, corporis vitae, dicta tempore voluptas
        consectetur modi. Velit!
      </p>
    </>,
  ];

  return (
    <div className={`tab-content bg-white start ${fadeIn}`}>{content[tab]}</div>
  );
}

function MoreProducts(props) {
  let moreItems = props.item;
  let setItem = props.setItem;

  return (
    <div className='more-products-container'>
      <h2 className='h5 text-uppercase mb-4'>Related products</h2>
      <div className='row'>
        {moreItems.map((item, i) => {
          return (
            <ProductCard key={i} item={item} setItem={setItem}></ProductCard>
          );
        })}
      </div>
    </div>
  );
}

function ProductCard(props) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let item = props.item;
  let setItem = props.setItem;
  let ItemsData = props.ItemsData;
  let getMoreItems = props.getMoreItems;

  return (
    <div className='col-lg-3 col-sm-6'>
      <div className='el-wrapper detail-el-wrapper'>
        <div className='box-up'>
          <img
            className='img product-image'
            src={item.imageURL}
            alt='#!'
            width='80%'
          />
          <div className='img-info'>
            <div className='info-inner'>
              <span
                className='p-name'
                onClick={() => {
                  navigate(`/detail/` + item.id);
                  setItem(item);
                  getMoreItems(ItemsData);
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

          <a
            className='cart'
            href='#!'
            onClick={() => {
              dispatch(addItem(item));
              dispatch(updateCartCount());
            }}
          >
            <span className='price'>${item.price}</span>
            <span className='add-to-cart'>
              <span className='txt'>Add in cart</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;

// ---------------------------------------------------
// ---------------------------------------------------
