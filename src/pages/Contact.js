import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

import { FcHome,FcCellPhone,FcInfo } from "react-icons/fc";
import { HiMailOpen } from "react-icons/hi";
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrum title="Contact Us" />

      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d228.01827938133655!2d90.40948246563029!3d23.87924554254564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1694618424608!5m2!1sen!2sbd"
                width="600"
                title="map"
                height="450"
                className="border-0 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form>
                    <div class="mb-3">
                      <label for="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Andy Robertson" 
                      />
                     
                    </div>
                    <div class="mb-3">
                      <label className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="andy_robert@example.com"
                       
                      />
                      <div id="emailHelp" class="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div class="mb-3">
                      <label className="form-label">
                       Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="016......"
                      />
                    </div>
                    <div class="mb-3">
                      <label className="form-label">
                       Message
                      </label>
                      <textarea
                        
                        className="form-control w-100"
                        placeholder="comments"
                        
                      />
                    </div>

                    <button type="submit" class="button border-0">
                      Submit
                    </button>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center mt-5">
                       
                        <FcHome className="fs-5"/> 
                        <address className="mb-0">
                          House No. 153 , Primary School Road , Dakshinkhan , Dhaka
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FcCellPhone className="fs-5" /> <a href="/">+8801679175553</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <HiMailOpen className="fs-5" /> <a href="/">hossainsafayet187@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FcInfo className="fs-5"/> 
                        <p className="mb-0">Saturday to Thursday 10 AM to 5 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
