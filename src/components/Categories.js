import React, { useState, useEffect } from 'react';
import { shoesImage, categoryImage } from '../store/data';

function Categories() {
  let [fadeIn, setFadeIn] = useState('');

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
              <strong className='category-item-title'>Limited</strong>
            </a>
          </div>
          <div className='col-md-4 col-stacked'>
            <a className='category-item mb-4' href='#!'>
              <img
                className='img-fluid img-stacked'
                src={categoryImage[0]}
                alt='#'
              />
              <strong className='category-item-title'>ATHLETIC</strong>
            </a>
            <a className='category-item mb-4' href='#!'>
              <img
                className='img-fluid img-stacked'
                src={categoryImage[5]}
                alt='#'
              />
              <strong className='category-item-title'>Formal</strong>
            </a>
          </div>
          <div className='col-md-4'>
            <a className='category-item' href='#!'>
              <img
                className='img-fluid img-full'
                src={categoryImage[7]}
                alt='#'
              />
              <strong className='category-item-title'>Casual</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Categories;
