import {ImCross} from "react-icons/im"
import Color from "../components/Color";
const Compare = () => {
  return (
    <div className="col-6">
    <div className="compare-product-card position-relative">
      <ImCross className="position-absolute cross" />
      <div className="product-card-image">
        <img
          
          src="images/watch.jpg"
          alt="cross"
        />
      </div>
      <div className="compare-product-details">
          <h5 className="title">
              Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch with Wi-Fi + 5G Tablet
          </h5>
          <h6 className="price">
              BDT 10000
          </h6>
          <div>
              <div className="product-details">
                  <h5>Brand : </h5>
                  <p>Havels</p>
              </div>
              <div className="product-details">
                  <h5>Type : </h5>
                  <p>Watch</p>
              </div>
              <div className="product-details">
                  <h5>Availability : </h5>
                  <p>In Stock</p>
              </div>
              <div className="product-details">
                  <h5>Color : </h5>
                  <Color />
              </div>
              <div className="product-details">
                  <h5>Size : </h5>
                  <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                  </div>
                  
              </div>
          
          </div>
      </div>
    </div>
  
  </div>
  )
}

export default Compare