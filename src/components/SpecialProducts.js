import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProducts = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="col-4 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src={props.src} alt=" " />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Haveli</h5>
            <h6 className="title">Samsung Galaxy Note 10 Mobile Phone</h6>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">
                BDT 100000 &nbsp; <strike>120000</strike>
              </span>
            </p>
            <div className="discount-till align-items-center gap-10">
              <p className="mb-0 mt-1">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center mt-2">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">1</span>
              </div>
              <div className="prod-count my-3">
                <p>Products : 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{width: "25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>

                </div>
              </div>
              <Link className="button mb-3">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
