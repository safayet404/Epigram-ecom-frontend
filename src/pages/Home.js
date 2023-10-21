import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import FamousCard from "../components/FamousCard";
import Container from "../components/Container";
import { services, home_items, brand } from "../utils/services";
const Home = ({ src, src1, value }) => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>ipad S13+ Pro.</h5>
                <p>From BDT. 10000 or 4100/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13+ Pro.</h5>
                  <p>
                    From BDT. 10000 <br /> or 4100/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13+ Pro.</h5>
                  <p>
                    From BDT. 10000 <br /> or 4100/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13+ Pro.</h5>
                  <p>
                    From BDT. 10000 <br /> or 4100/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad S13+ Pro.</h5>
                  <p>
                    From BDT. 10000 <br /> or 4100/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15">
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center rounded-3">
              {home_items?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-30">
                    <div>
                      <h6>{i.title}</h6>
                      <p>{i.quantity}</p>
                    </div>
                    <img src={i.image} alt="camera" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="marque-wraper py-5">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper rounded-2">
            <Marquee>
              {brand?.map((i, j) => {
                return (
                  <div className="mx-4  w-25">
                    <img src={i.image} alt="brand" />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts src="images/watch1.jpg" />
          <SpecialProducts src="images/tablet.jpg" />
          <SpecialProducts src="images/speaker1.jpg" />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>

          <ProductCard
            src="images/speaker.jpg"
            src1="images/watch.jpg"
            value="5"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="3"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="4"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="3"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="1"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="2"
          />
        </div>
      </Container>
      <Container class1="feature-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>

          <ProductCard
            src="images/speaker1.jpg"
            src1="images/speaker.jpg"
            value="5"
          />
          <ProductCard
            src="images/watch1.jpg"
            src1="images/speaker2.jpg"
            value="3"
          />
          <ProductCard
            src="images/watch1.jpg"
            src1="images/speaker.jpg"
            value="4"
          />
          <ProductCard
            src="images/watch.jpg"
            src1="images/speaker.jpg"
            value="3"
          />
          <ProductCard
            src="images/laptop.jpg"
            src1="images/speaker.jpg"
            value="1"
          />
          <ProductCard
            src="images/tablet.jpg"
            src1="images/speaker.jpg"
            value="2"
          />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <FamousCard />
          <FamousCard />
          <FamousCard />
          <FamousCard />
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading  text-center">Our Latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
