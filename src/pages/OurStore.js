import { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Container from "../components/Container";
const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrum title="Our Store" />

      <Container class1="store-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlfor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlfor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="From"
                      aria-label="to"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="To"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title">Size</h5>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-2"
                  />
                  <label className="form-check-label" htmlfor="color-2">
                    M (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="color-1"
                  />
                  <label className="form-check-label" htmlfor="color-1">
                    S (1)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3">
                  HeadPhone
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  Laptop
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  Mobile
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  Tablet
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  iPad
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  SmartPhone
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  Computer
                </span>
                <span className="badge bg-light text-secondary rounded-3">
                  Mouse
                </span>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/watch.jpg"
                      alt="random"
                    />
                  </div>
                  <div className="w-50">
                    <h6>
                      Kids headphones bulk 10 pack multi colored for students
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value="4"
                    />
                    <b>BDT. 3000</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/watch.jpg"
                      alt="random"
                    />
                  </div>
                  <div className="w-50">
                    <h6>
                      Kids headphones bulk 10 pack multi colored for students
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                      value="4"
                    />
                    <b>BDT. 3000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block">Sort By :</p>
                  <select name="" id="" className="form-control">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">
                      Best Sellings
                    </option>
                    <option value="title-ascending">Alphabitically, A-Z</option>
                    <option value="title-descending">
                      Alphabitically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">
                      Date , new to old
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 grid">
                  <p className="totalproducts mb-0" style={{ width: "100px" }}>
                    21 Products
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="products-list p-1">
              <div className="d-flex flex-wrap">
                <ProductCard
                  src="images/watch.jpg"
                  src1="images/speaker.jpg"
                  grid={grid}
                />

                <ProductCard
                  src="images/watch.jpg"
                  src1="images/speaker.jpg"
                  grid={grid}
                />
                <ProductCard
                  src="images/watch.jpg"
                  src1="images/speaker.jpg"
                  grid={grid}
                />

                <ProductCard
                  src="images/watch.jpg"
                  src1="images/speaker.jpg"
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
