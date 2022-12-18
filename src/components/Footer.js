function Footer() {
  return (
    <footer className='bg-dark text-white footer'>
      <div className='container py-4'>
        <div className='row py-5'>
          <div className='col-md-4 mb-3 mb-md-0'>
            <h6 className='text-uppercase mb-3'>Customer services</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <a className='footer-link' href='#!'>
                  Help &amp; Contact Us
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Returns &amp; Refunds
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Online Stores
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <h6 className='text-uppercase mb-3'>Company</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <a className='footer-link' href='#!'>
                  What We Do
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Available Services
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Latest Posts
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h6 className='text-uppercase mb-3'>Social media</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <a className='footer-link' href='#!'>
                  Twitter
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Instagram
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Tumblr
                </a>
              </li>
              <li>
                <a className='footer-link' href='#!'>
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='border-top pt-4'>
          <div className='row'>
            <div className='col-md-6 text-center text-md-start'>
              <p className='small text-muted mb-0'>
                &copy; 2023 All rights reserved.
              </p>
            </div>
            <div className='col-md-6 text-center text-md-end'>
              <p className='small text-muted mb-0'>
                <a className='text-muted bottom-link' href='#'>
                  Terms of Use
                </a>
                <a className='text-muted bottom-link' href='#'>
                  Privacy Policy
                </a>
                <a className='text-muted bottom-link' href='#'>
                  Cookie Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
