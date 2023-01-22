import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='bg-dark text-white footer'>
      <div className='container py-4'>
        <div className='row py-5 footer-row'>
          <div className='col-md-4 mb-3 mb-md-0'>
            <h6 className='text-uppercase mb-3'>Customer services</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <Link className='footer-link'>Help &amp; Contact Us</Link>
              </li>
              <li>
                <Link className='footer-link'>Returns &amp; Refunds</Link>
              </li>
              <li>
                <Link className='footer-link'>Online Stores</Link>
              </li>
              <li>
                <Link className='footer-link'>Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4 mb-3 mb-md-0'>
            <h6 className='text-uppercase mb-3'>Company</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <Link className='footer-link'>What We Do</Link>
              </li>
              <li>
                <Link className='footer-link'>Available Services</Link>
              </li>
              <li>
                <Link className='footer-link'>Latest Posts</Link>
              </li>
              <li>
                <Link className='footer-link'>FAQs</Link>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <h6 className='text-uppercase mb-3'>Social media</h6>
            <ul className='list-unstyled mb-0'>
              <li>
                <Link className='footer-link'>Twitter</Link>
              </li>
              <li>
                <Link className='footer-link'>Instagram</Link>
              </li>
              <li>
                <Link className='footer-link'>Tumblr</Link>
              </li>
              <li>
                <Link className='footer-link'>Pinterest</Link>
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
                <Link className='text-muted bottom-link' href='#'>
                  Terms of Use
                </Link>
                <Link className='text-muted bottom-link' href='#'>
                  Privacy Policy
                </Link>
                <Link className='text-muted bottom-link' href='#'>
                  Cookie Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
