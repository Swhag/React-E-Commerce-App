import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCount,
  minusCount,
  removeItem,
  getSubtotal,
  getTax,
  getTotal,
  updateCartCount,
} from '../redux/cartSlice';

function Cart() {
  let dispatch = useDispatch();
  let [fadeIn, setFadeIn] = useState('');

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  useEffect(() => {
    dispatch(getSubtotal());
    dispatch(getTax());
    dispatch(getTotal());
    dispatch(updateCartCount());
  }, []);

  return (
    <div className={`px-4 px-lg-0 start ${fadeIn}`}>
      <div className='pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 p-5 bg-white rounded shadow-sm mb-5'>
              <div className='table-responsive'>
                <table className='table'></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
