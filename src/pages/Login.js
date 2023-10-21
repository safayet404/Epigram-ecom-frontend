import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <BreadCrum title="Wishlist" />
      <Meta title="Wishlist" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center">Login</h3>
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
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <Link to="/forget-password">Forget Password?</Link>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button border-0 signup">
                      Sign Up
                    </Link>
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

export default Login;
