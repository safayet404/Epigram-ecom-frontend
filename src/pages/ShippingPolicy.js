import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import Meta from "../components/Meta";
 
const ShippingPolicy = () => {
  return (
    <>
    <BreadCrum title="Shipping Policy" />
     <Meta title="Shipping Policy" />
     <Container class1="policy-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
     
      </Container>
   </>
  )
}

export default ShippingPolicy