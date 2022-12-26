import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
// import { setItems } from '../store/itemSlice';

function Details() {
  let { id } = useParams();
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let [fadeIn, setFadeIn] = useState('');
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(60);
  let [tab, setTab] = useState(0);
  let [items, setItems] = useState([]);

  let test = items.find((item) => item.id === parseInt(id));
  // let item = state.items.data.find((item) => item.id === parseInt(id));
  let item = {
    id: 53,
    name: "AF1 Low 'Have a Nike Day'",
    brand: 'NIKE',
    gender: 'MEN',
    category: 'CASUAL',
    price: 100,
    imageURL:
      'https://image.goat.com/attachments/product_template_pictures/images/019/367/662/original/484799_00.png.png',
    slug: 'air-force-1-low-gs-have-a-nike-day-white-af1-gs-hand-wht',
    limited: false,
  };

  useEffect(() => {
    const fetchShoes = async () => {
      const res = await axios.get('https://Swhag.github.io/shoesData1.json');
      let itemsDataCopy = [...res.data];

      setItems(itemsDataCopy);
    };
    fetchShoes();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 60000);

    setTimeout(() => {
      return count > 0 ? setCount(count - 1) : 0;
    }, 1000);
  });

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  useEffect(() => {
    console.log(item);
    console.log(id);
    console.log(test);
    // console.log(state.items.data);
  }, []);

  return (
    <div className={`container start ${fadeIn}`}>
      {alert ? (
        <div className='alert alert-warning-custom'>
          20% holiday discount ends in {count} seconds
        </div>
      ) : null}

      <div className='row'>
        <div className='col-md-6'>
          <img src={item.imageURL} alt='#' width='90%' />
        </div>
        <div className='col-md-6 product-card'>
          <h4 className='pt-5'>{item.name}</h4>
          <p>${item.price}</p>

          <button className='btn btn-danger'>Add to Cart</button>
        </div>
      </div>

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
    </div>
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
        asperiores necessitatibus nulla error dolore magni. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Dolore vitae odio consequuntur
        pariatur repellat facilis facere ipsam recusandae aliquam aliquid.
      </p>
    </>,

    // ---------------------------------------------------
    <>
      <div className='tab-content-header'>Shipping Info Content</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat
        necessitatibus magni veritatis harum! Fuga exercitationem accusantium
        neque vitae assumenda!
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

  return <div className={`tab-content start ${fadeIn}`}>{content[tab]}</div>;
}

export default Details;

// ---------------------------------------------------
// ---------------------------------------------------
