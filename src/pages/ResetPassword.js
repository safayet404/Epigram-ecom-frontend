import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import Meta from "../components/Meta";
 

const ResetPassword = () => {
  return (
    <>
      <BreadCrum title="Reset Password" />
      <Meta title="Reset Password" />
      <Container class1="reset-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxxl">
          <div className="row">
            <div className="col-12">
              <div className="reset-password-card">
                <h5 className="text-center mb-3">Reset Your Password</h5>

                <form action="" className="d-flex flex-column gap-30">
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>

                  <div>
                    <div className="d-flex flex-column justify-content-center gap-15 align-items-center mt-2">
                      <button className="button border-0">Ok</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
