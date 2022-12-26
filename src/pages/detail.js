import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Details(props) {
  let { id } = useParams();
  let [fadeIn, setFadeIn] = useState('');
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(60);
  let [tab, setTab] = useState(0);
  let item = props.items.find((item) => item.id === parseInt(id));

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
          <p>{item.content}</p>
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
