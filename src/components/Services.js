function Services() {
  return (
    <>
      <section className='py-5 bg-light services-section'>
        <div className='container services-container'>
          <div className='text-start ms-3 icon-box'>
            <div>
              <i className='fas fa-shipping-fast service-icons'></i>
            </div>
            <div>
              <h6 className='mb-1'>FREE SHIPPING</h6>
              <p className='text-sm mb-0 text-muted'>Free shipping worldwide</p>
            </div>
          </div>

          <div className='text-start ms-3 icon-box'>
            <div>
              <i className='fa-solid fa-user-tie service-icons'></i>
            </div>
            <div>
              <h6 className='mb-1'>24 / 7 SERVICE</h6>
              <p className='text-sm mb-0 text-muted'>Free shipping worldwide</p>
            </div>
          </div>

          <div className='text-start ms-3 icon-box'>
            <div>
              <i className='fa-brands fa-square-instagram service-icons'></i>
            </div>
            <div>
              <h6 className='mb-1'>FESTIVALOFFERS</h6>
              <p className='text-sm mb-0 text-muted'>Free shipping worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container p-0'>
          <div className='row gy-3'>
            <div className='col-lg-6'>
              <h5 className='text-uppercase'>
                Subscribe and get 30% off Coupon
              </h5>
              <p className='text-sm text-muted mb-0'>
                Nisi nisi tempor consequat laboris nisi.
              </p>
            </div>
            <div className='col-lg-6'>
              <form action='#!'>
                <div className='input-group'>
                  <input
                    className='form-control form-control-lg'
                    type='email'
                    placeholder='Enter your email address'
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-dark'
                    id='button-addon2'
                    type='submit'
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
