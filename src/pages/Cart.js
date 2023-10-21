import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { AiFillDelete } from "react-icons/ai";
const Cart = () => {
  return (
    <>
      <BreadCrum title="Cart" />
      <Meta title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-content-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4-">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-content-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/laptop.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-75">
                    <p>Hp Laptop</p>
                    <p>Maybe Black</p>
                    <p>L</p>
                  </div>
                </div>
                <div className="cart-col-2 d-flex align-items-center">
                  <h5 className="price">BDT 1000</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <AiFillDelete className="w-10" />
                  </div>
                </div>
                <div className="cart-col-4 d-flex align-items-center gap-15">
                  <div>
                    <h4>25000</h4>
                  </div>
                </div>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-content-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/laptop.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-75">
                    <p>Hp Laptop</p>
                    <p>Maybe Black</p>
                    <p>L</p>
                  </div>
                </div>
                <div className="cart-col-2 d-flex align-items-center">
                  <h5 className="price">BDT 1000</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <AiFillDelete className="w-10" />
                  </div>
                </div>
                <div className="cart-col-4 d-flex align-items-center gap-15">
                  <div>
                    <h4>25000</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 py-2">
              <div className="d-flex justify-content-between align-items-baseline">
              <div><Link to="/product" className="button border-0">Continue To Shopping</Link></div>
              <div className="align-items-end">
                <h4>Subtotal : BDT 10000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button border-0">Checkout</Link>
              </div>
              </div>
              
            </div>
          </div>
      </Container>
     
    </>
  );
};

export default Cart;
