import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { banner } from '../redux/data';

function Banner() {
  let [fadeIn, setFadeIn] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    setFadeIn('end');

    return () => {
      setFadeIn('');
    };
  }, []);

  return (
    <div className={`hero-container start ${fadeIn}`}>
      <section
        className='hero pb-3 bg-cover bg-center d-flex align-items-center'
        style={{ backgroundImage: 'url(' + banner + ')' }}
      >
        <div className='container py-5'>
          <div className='row px-4 px-lg-5'>
            <div className='col-lg-6'>
              <p className='text-muted small text-uppercase mb-2'>
                New Inspiration 2023
              </p>
              <h1 className='h2 text-uppercase mb-3'>20% off on new season</h1>
              <div
                className='btn btn-dark'
                href='#!'
                onClick={() => {
                  navigate('/shop');
                }}
              >
                Browse collections
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
