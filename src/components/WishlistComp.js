import { ImCross } from "react-icons/im";

const WishlistComp = () => {
  return (
    <div className="col-3">
      <div className="wishlist-product-card position-relative">
        <ImCross className="position-absolute cross" />
        <div className="wishlist-card-image">
          <img src="images/watch.jpg" alt="cross" />
        </div>

        <div className="py-3 px-3 wishlist-product-details">
            <h5 className="title">Honor T1 7.0 1GB RAM 8 GB ROM 7 Inch with Wi-Fi + 5G Tablet</h5>
            <h6 className="price">BDT 10000</h6>
        </div>
      </div>
    </div>
  );
};

export default WishlistComp;
