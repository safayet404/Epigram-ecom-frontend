import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { AiOutlineLeft } from "react-icons/ai";
const Checkout = () => {
  return (
    <>
      <BreadCrum title="Checkout" />
      <Meta title="Checkout" />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#0">Cart</a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  Safayet Hossain (hossainsafayet187@gmail.com)
                </p>
                <div className="shipping-address-wrapper">
                  <form>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Saved Address"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Country/Region"
                      />
                    </div>
                    <div className="mb-4 d-flex gap-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name (Optional)"
                      />
                    </div>
                    <div className="mb-4 d-flex gap-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div className="mb-4 d-flex gap-50">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartmetn,suits etc (Optional)"
                      />
                    </div>
                    <div className="mb-4 d-flex gap-30">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ZIP Code"
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-5 mt-5">
                      <Link to="/cart" className="border-0">
                        {" "}
                        <AiOutlineLeft className="me-1" /> Return to Cart
                      </Link>
                      <Link className="button border-0">
                        Continue to Shipping
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-align-items-center">
                  <div className="w-75 gap-10 d-flex">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="images/speaker.jpg"
                        alt="speaker"
                      />
                    </div>
                    <div>
                      <h5 className="total">title of the producttitle of the producttitle of the product </h5>
                      <p className="total-price">description of the product</p>
                    </div>
                  </div>
                  <div className="flex-grow-1 align-items-baseline">
                    <h5 className="total">BDT 10000</h5>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="total">Subtotal</p>
                  <p className="total-price">BDT 10000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">BDT 10000</p>
                </div>
                <div className="d-flex justify-content-between align-items-centern mt-4">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">BDT 10000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
