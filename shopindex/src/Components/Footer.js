import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>NEW TO JUMIA?</h5>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter E-mail Address" />
              <button className="btn btn-secondary">MALE</button>
              <button className="btn btn-secondary">FEMALE</button>
            </div>
            <div>
              <input type="checkbox" id="privacy" />
              <label htmlFor="privacy" className="ms-2">I agree to Jumia's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</label>
            </div>
            <a href="#" className="text-warning">I accept the Legal Terms</a>
          </div>
          <div className="col-md-6 text-end">
            <h5>DOWNLOAD JUMIA FREE APP</h5>
            <p>Get access to exclusive offers!</p>
            <div className="d-flex justify-content-end">
              <img src="https://example.com/app-store-logo.png" alt="App Store" className="me-2" />
              <img src="https://example.com/google-play-logo.png" alt="Google Play" />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-3">
            <h6>NEED HELP?</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Chat with us</a></li>
              <li><a href="#" className="text-white">Help Center</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>USEFUL LINKS</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Service Center</a></li>
              <li><a href="#" className="text-white">How to shop on Jumia?</a></li>
              <li><a href="#" className="text-white">Delivery options and timelines</a></li>
              <li><a href="#" className="text-white">How to return a product on Jumia?</a></li>
              <li><a href="#" className="text-white">Corporate and bulk purchases</a></li>
              <li><a href="#" className="text-white">Report a Product</a></li>
              <li><a href="#" className="text-white">Dispute Resolution Policy</a></li>
              <li><a href="#" className="text-white">Returns & Refund Timeline</a></li>
              <li><a href="#" className="text-white">Return Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>ABOUT JUMIA</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About us</a></li>
              <li><a href="#" className="text-white">Jumia careers</a></li>
              <li><a href="#" className="text-white">Jumia Express</a></li>
              <li><a href="#" className="text-white">Terms and Conditions</a></li>
              <li><a href="#" className="text-white">Privacy Notice</a></li>
              <li><a href="#" className="text-white">Jumia Store Credit Terms & Conditions</a></li>
              <li><a href="#" className="text-white">Jumia Payment Information Guidelines</a></li>
              <li><a href="#" className="text-white">Cookie Notice</a></li>
              <li><a href="#" className="text-white">Jumia Global</a></li>
              <li><a href="#" className="text-white">Official Stores</a></li>
              <li><a href="#" className="text-white">Flash Sales</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6>MAKE MONEY WITH JUMIA</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Sell on Jumia</a></li>
              <li><a href="#" className="text-white">Vendor hub</a></li>
              <li><a href="#" className="text-white">Become a Sales Consultant</a></li>
              <li><a href="#" className="text-white">Become a Logistics Service Partner</a></li>
              <li><a href="#" className="text-white">Join the Jumia DA Academy</a></li>
              <li><a href="#" className="text-white">Join the Jumia KOL Program</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <h6>JUMIA INTERNATIONAL</h6>
            <ul className="list-unstyled d-flex flex-wrap">
              <li className="me-3"><a href="#" className="text-white">Algeria</a></li>
              <li className="me-3"><a href="#" className="text-white">Egypt</a></li>
              <li className="me-3"><a href="#" className="text-white">Ghana</a></li>
              <li className="me-3"><a href="#" className="text-white">Ivory Coast</a></li>
              <li className="me-3"><a href="#" className="text-white">Kenya</a></li>
              <li className="me-3"><a href="#" className="text-white">Morocco</a></li>
              <li className="me-3"><a href="#" className="text-white">Senegal</a></li>
              <li className="me-3"><a href="#" className="text-white">Tunisia</a></li>
              <li className="me-3"><a href="#" className="text-white">Uganda</a></li>
              <li className="me-3"><a href="#" className="text-white">Zando</a></li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h6>PAYMENT METHODS & DELIVERY PARTNERS</h6>
            <div className="d-flex justify-content-center">
              <img src="https://example.com/payment-method1.png" alt="Payment Method 1" className="me-3" />
              <img src="https://example.com/payment-method2.png" alt="Payment Method 2" className="me-3" />
              <img src="https://example.com/payment-method3.png" alt="Payment Method 3" className="me-3" />
              <img src="https://example.com/payment-method4.png" alt="Payment Method 4" className="me-3" />
              <img src="https://example.com/payment-method5.png" alt="Payment Method 5" className="me-3" />
              <img src="https://example.com/payment-method6.png" alt="Payment Method 6" className="me-3" />
              <img src="https://example.com/payment-method7.png" alt="Payment Method 7" className="me-3" />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <h6>JOIN US ON</h6>
            <div className="d-flex justify-content-center">
              <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white me-3"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
