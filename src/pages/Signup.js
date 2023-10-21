import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <BreadCrum title="Sign Up" />
      <Meta title="Sign Up" />
      <div className="signup-wrapper py-5 home-wrapper-2">
        <div className="container-xxxl">
          <div className="row">
            <div className="col-12">
              <div className="signup-card">
                <h3 className="text-center">Create Account</h3>
                <form action="" className="d-flex flex-column gap-30">
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                      className="form-control mt-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last-name"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="Email"
                      name="email"
                      placeholder="E-mail"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <Link className="button border-0 signup">Create</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
