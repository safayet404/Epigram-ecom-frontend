import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill, BsEye } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { MdFavorite, MdCompareArrows } from "react-icons/md";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div
      className={`${
        location.pathname === "/store" ? `gr-${grid}` : "col-2"
      } p-2`}
    >
      <Link to="/product-details" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link className="action-bar-link">
            <MdFavorite />
          </Link>
        </div>

        <div className="product-image">
          <img src={props.src} alt="product-img" />
          <img src={props.src1} alt="product-img" />
        </div>
        <div className="product-details">
          <h6 className="brand">Haveli</h6>
          <h5>Kids headphone bulk 10 pack multi colored for students</h5>
          <p className="price">BDT 10000</p>
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value={props.value}
          />
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-10">
            <Link className="action-bar-link">
              <BsFillCartCheckFill />
            </Link>
            <Link className="action-bar-link">
              <MdCompareArrows />
            </Link>
            <Link className="action-bar-link">
              <BsEye />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
