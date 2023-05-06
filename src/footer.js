function Footer() {
    return (
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Stay connected with us:</span>
          </div>
  
          <div>
            <a href="https://www.facebook.com/yourNGO" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/yourNGO" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/yourNGO" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>
  
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  About Us
                </h6>
                <p>
                  We are a non-governmental organization committed to promoting sustainable development and improving the lives of people in need.
                </p>
              </div>
  
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Our Programs
                </h6>
                <p>
                  <a href="/" className="text-reset">Education</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Health</a>
                </p>
                <p>
                  <a href="/" className="text-reset">Livelihoods</a>
                </p>
              </div>
  
              <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Contact Us
                </h6>
                <p><i className="fas fa-home me-3"></i>123 Main Street, Anytown USA</p>
                <p><i className="fas fa-envelope me-3"></i><a href="mailto:info@yourNGO.org">info@yourNGO.org</a></p>
                <p><i className="fas fa-phone me-3"></i>(123) 456-7890</p>
              </div>
            </div>
          </div>
        </section>
  
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {new Date().getFullYear()} YourNGO.org. All rights reserved.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  