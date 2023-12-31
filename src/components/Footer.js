import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="letter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscrice
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white fs-6">
                  House No : 156, Primary School Road <br />
                  Dakshinkhan <br />
                  Uttara,Dhaka - 1230 <br />
                  Bangladesh <br />
                </address>
                <a className="mt-4 d-block mb-2 text-white" href="tel">
                  +8801679175553
                </a>
                <a className="d-block mb-0 text-white" href="tel">
                  hossainsafayet187@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="/github">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="/instagram">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="/linkedin">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="/youtube">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="privacy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="refund" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="shipping" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="terms" className="text-white py-2 mb-1">
                  Terms and Condition
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link to="/contact" className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptots</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; All Right Reserved by Safayet{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
