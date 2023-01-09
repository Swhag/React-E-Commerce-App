import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryImage } from '../redux/data';
import { setPage, setIndex } from '../redux/pageSlice';
import { sortByCategory, sortByLimited } from '../redux/itemSlice';

function Categories() {
  let [fadeIn, setFadeIn] = useState('');
  let state = useSelector((state) => state);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`start ${fadeIn}`}>
      <section className='pt-5'>
        <header className='text-center'>
          <p className='small text-muted small text-uppercase mb-1'>
            collections
          </p>
          <h2 className='h5 text-uppercase mb-4'>Shop Popular Categories</h2>
        </header>
        <div className='row'>
          <div className='col-md-4'>
            <div className='category-item'>
              <img
                className='img-fluid img-full'
                src={categoryImage[4]}
                alt='#'
              />
              <strong
                className='category-item-title'
                onClick={() => {
                  navigate('/shop');
                  dispatch(sortByLimited(state.items.data));
                  dispatch(setPage(1));
                  dispatch(setIndex());
                  window.scrollTo(0, 0);
                }}
              >
                Limited
              </strong>
            </div>
          </div>
          <div className='col-md-4 col-stacked'>
            <div className='category-item mb-4'>
              <img
                className='img-fluid img-stacked'
                src={categoryImage[0]}
                alt='#'
              />
              <strong
                className='category-item-title'
                onClick={() => {
                  navigate('/shop');
                  dispatch(sortByCategory([state.items.data, 'RUNNING']));
                  dispatch(setPage(1));
                  dispatch(setIndex());
                  window.scrollTo(0, 0);
                }}
              >
                RUNNING
              </strong>
            </div>
            <div className='category-item mb-4'>
              <img
                className='img-fluid img-stacked'
                src={categoryImage[5]}
                alt='#'
              />
              <strong
                className='category-item-title'
                onClick={() => {
                  navigate('/shop');
                  dispatch(sortByCategory([state.items.data, 'FORMAL']));
                  dispatch(setPage(1));
                  dispatch(setIndex());
                  window.scrollTo(0, 0);
                }}
              >
                Formal
              </strong>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='category-item'>
              <img
                className='img-fluid img-full'
                src={categoryImage[7]}
                alt='#'
              />
              <strong
                className='category-item-title'
                onClick={() => {
                  navigate('/shop');
                  dispatch(sortByCategory([state.items.data, 'CASUAL']));
                  dispatch(setPage(1));
                  dispatch(setIndex());
                  window.scrollTo(0, 0);
                }}
              >
                Casual
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
