function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-9 text-center'>
            <div className='footer-site-logo mb-4'>
              <a href='#'>KickStore.com</a>
            </div>
            <ul className='list-unstyled nav-links mb-5'>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Press</a>
              </li>
              <li>
                <a href='#'>Careers</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Legal</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>

            <div className='social mb-4'>
              <h3>Stay Connected</h3>
              <ul className='list-unstyled'>
                <li className='in'>
                  <a href='#'>
                    <span className='icon-instagram'></span>
                  </a>
                </li>
                <li className='fb'>
                  <a href='#'>
                    <span className='icon-facebook'></span>
                  </a>
                </li>
                <li className='tw'>
                  <a href='#'>
                    <span className='icon-twitter'></span>
                  </a>
                </li>
                <li className='pin'>
                  <a href='#'>
                    <span className='icon-pinterest'></span>
                  </a>
                </li>
                <li className='dr'>
                  <a href='#'>
                    <span className='icon-dribbble'></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className='copyright'>
              <p className='mb-0'>
                <small>&copy; KickStore. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
