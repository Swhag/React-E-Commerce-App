import { useParams } from 'react-router-dom';

function Details(props) {
  let { id } = useParams();
  let currentShoes = props.shoes.find((x) => x.id === parseInt(id));

  return (
    <div className='container'>
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
