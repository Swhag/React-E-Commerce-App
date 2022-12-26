import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { categoryImage } from '../store/data';
import { setPage, setTIndex } from '../store/pageSlice';
import {
  setItems,
  sortByBrand,
  sortByGender,
  sortByCategory,
  sortByLimited,
  doubleCondition,
  multipleCondition,
} from '../store/itemSlice';

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
            <a className='category-item' href='#!'>
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
                  dispatch(setTIndex());
                }}
              >
                Limited
              </strong>
            </a>
          </div>
          <div className='col-md-4 col-stacked'>
            <a className='category-item mb-4' href='#!'>
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
                  dispatch(setTIndex());
                }}
              >
                RUNNING
              </strong>
            </a>
            <a className='category-item mb-4' href='#!'>
              <img
                className='img-fluid img-stacked'
                src={categoryImage[5]}
                alt='#'
              />
              <strong
                className='category-item-title'
                onClick={() => {
                  navigate('/shop');
                  navigate('/shop');
                  dispatch(sortByCategory([state.items.data, 'FORMAL']));
                  dispatch(setPage(1));
                  dispatch(setTIndex());
                }}
              >
                Formal
              </strong>
            </a>
          </div>
          <div className='col-md-4'>
            <a className='category-item' href='#!'>
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
                  dispatch(setTIndex());
                }}
              >
                Casual
              </strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
