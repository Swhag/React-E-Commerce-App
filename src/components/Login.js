import React from 'react';

function LoginModal(props) {
  let login = props.login;
  let setLogin = props.setLogin;

  const exitPrompt = (e) => {
    if (e.target.classList.contains('exit-zone')) {
      setLogin('');
    }
  };

  return (
    <div
      className={`black-bg ${login} exit-zone`}
      onMouseDown={(e) => {
        exitPrompt(e);
      }}
    >
      <div className='container login-container'>
        <div className='row'>
          <div className='col-lg-10 col-xl-9 mx-auto '>
            <div className='card flex-row my-5 border-0 shadow rounded-3 overflow-hidden'>
              <div className='card-img-left d-none d-md-flex'>
                {/* <!-- Background image for card set in CSS! --> */}
              </div>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-5 fs-5 '>
                  Login to continue
                  <i
                    className='fa-solid fa-xmark login-close-icon'
                    onClick={() => {
                      setLogin('');
                    }}
                  ></i>
                </h5>

                <form>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      id='floatingInputUsername'
                      placeholder='myusername'
                      required
                      autoFocus
                    ></input>
                    <label htmlFor='floatingInputUsername'>Username</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input
                      type='password'
                      className='form-control'
                      id='floatingPassword'
                      placeholder='Password'
                    ></input>
                    <label htmlFor='floatingPassword'>Password</label>
                  </div>

                  <div className='d-grid mb-2'>
                    <button
                      className='btn btn-lg btn-primary btn-login fw-bold text-uppercase'
                      type='submit'
                    >
                      Log In
                    </button>
                  </div>

                  <div className='d-block text-center mt-2 small'>
                    Don't have an account? Register Here
                  </div>

                  <hr className='my-4'></hr>

                  <div className='d-grid mb-2'>
                    <button
                      className='btn btn-lg btn-google btn-login fw-bold text-uppercase social-media-login'
                      type='submit'
                    >
                      <i className='fab fa-google me-2'></i> Sign up with Google
                    </button>
                  </div>

                  <div className='d-grid'>
                    <button
                      className='btn btn-lg btn-facebook btn-login fw-bold text-uppercase social-media-login'
                      type='submit'
                    >
                      <i className='fab fa-facebook-f me-2'></i> Sign up with
                      Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
