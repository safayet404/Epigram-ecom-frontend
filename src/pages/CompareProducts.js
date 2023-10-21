import BreadCrum from "../components/BreadCrum";

import Compare from "../components/Compare";
import Meta from "../components/Meta";


const CompareProducts = () => {
  return (
    <>
      <BreadCrum title="Compare Product" />
      <Meta title="Compare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxxl">
          <div className="row d-flex">
           <Compare/>
           <Compare/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
