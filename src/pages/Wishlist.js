
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import WishlistComp from "../components/WishlistComp";
import Container from "../components/Container";
const Wishlist = () => {
  return (
    <>
      <BreadCrum title="Wishlist" />
      <Meta title="Wishlist" />
      <Container>
      <div className="row">
          <WishlistComp />
          <WishlistComp />
          <WishlistComp />
          <WishlistComp />
        </div>
      </Container>
  
    </>
  );
};

export default Wishlist;
