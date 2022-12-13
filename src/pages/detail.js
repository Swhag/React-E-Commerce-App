import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
  let { id } = useParams();
  let currentShoes = props.shoes.find((x) => x.id === parseInt(id));
  let [inputAlert, setInputAlert] = useState(false);
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(60);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 60000);

    setTimeout(() => {
      return count > 0 ? setCount(count - 1) : 0;
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

          <div className='input-group mb-3'>
            <input
              onChange={(e) => {
                isNaN(Number(e.target.value))
                  ? setInputAlert(true)
                  : setInputAlert(false);
              }}
              className='form-control'
              type='text'
              placeholder='quantity'
            ></input>
          </div>
          {inputAlert ? (
            <div className='alert alert-danger' role='alert'>
              Please enter a number
            </div>
          ) : null}
          <button className='btn btn-danger'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
