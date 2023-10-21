import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";

import Compare from "../components/Compare";
import Meta from "../components/Meta";


const CompareProducts = () => {
  return (
    <>
      <BreadCrum title="Compare Product" />
      <Meta title="Compare Product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
       
          <div className="row d-flex">
           <Compare/>
           <Compare/>
        
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
