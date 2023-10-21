import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
 

const PrivacyPolicy = () => {
  return (
    <>
     <BreadCrum title="Privacy and Policy" />
      <Meta title="Privacy and Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy