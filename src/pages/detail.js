import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
  let { id } = useParams();
  let currentShoes = props.shoes.find((x) => x.id === parseInt(id));
  let [alert, setAlert] = useState(true);

  let [count, setCount] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 600000);

    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  });

  return (
    <div className='container'>
      {alert ? (
        <div className='alert alert-warning'>
          20% holiday discount ends in {count} seconds
        </div>
      ) : null}

      <div className='row'>
        <div className='col-md-6'>
          <img src={props.shoesImage[id]} alt='#' width='100%' />
        </div>
        <div className='col-md-6 product-card'>
          <h4 className='pt-5'>{currentShoes.title}</h4>
          <p>{currentShoes.content}</p>
          <p>${currentShoes.price}</p>
          <button className='btn btn-danger'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
