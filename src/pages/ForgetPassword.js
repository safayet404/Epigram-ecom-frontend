import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  return (
    <>
      <BreadCrum title="Forget Password" />
      <Meta title="Forget Password" />
     
        <Container class1="forget-password-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="forget-password-card">
                <h3 className="text-center">Reset Your Password</h3>
                <p>We will send you an email to reset your password</p>
                <form action="" className="d-flex flex-column gap-30">
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control mt-2"
                    />
                  </div>

                  <div>
                    <div className="d-flex flex-column justify-content-center gap-15 align-items-center mt-2">
                      <button className="button border-0">Submit</button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
    
    </>
  );
};

export default ForgetPassword;
