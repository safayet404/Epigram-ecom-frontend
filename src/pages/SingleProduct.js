import { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import ImageZoom from "../components/ImageZoom";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { MdCompareArrows } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";

import { GiWoodStick } from "react-icons/gi";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import Container from "../components/Container";
const SingleProduct = () => {
  const [orderedProduct] = useState(true);
  return (
    <>
      <BreadCrum title="Product Name" />
      <Meta title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div className="zoom">
                <ImageZoom src="https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_960_720.jpg"></ImageZoom>
              </div>
              <div className="other-product-image d-flex flex-wrap gap-15">
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    alt=" "
                    src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    alt=" "
                    src="https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_960_720.jpg"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    alt=" "
                    src="https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    alt=" "
                    src="https://cdn.pixabay.com/photo/2018/02/21/05/17/cat-3169476_960_720.jpg"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details ">
              <div className="border-bottom">
                <h5 className="title">
                  Kids Headphones Bulk 10 pack Multi Colored For students
                </h5>
              </div>
              <div className="border-bottom">
                <p className="price">BDT 1000</p>

                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    classNames="mb-3"
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value="3"
                  />
                  <p>(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#aaaa">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom">
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Type : </h3>{" "}
                  <p className="product-data">hjjjjh</p>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Brand : </h3>{" "}
                  <p className="product-data">Haveli</p>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Category : </h3>{" "}
                  <p className="product-data">Watch</p>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Tags : </h3>{" "}
                  <p className="product-data">
                    headphone,elctronics,accessories,best product
                  </p>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">SKU : </h3>{" "}
                  <p className="product-data">
                    headphone,elctronics,accessories,best product
                  </p>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Availability : </h3>{" "}
                  <p className="product-data">In Stock</p>
                </div>
                <div className="align-items-center mb-3 d-flex gap-10 mt-4">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border-1 bg-white text-dark border-secondary border">
                      S
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary border">
                      M
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary border">
                      L
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary border">
                      XL
                    </span>
                  </div>
                </div>
                <div className="align-items-center d-flex gap-10 mt-4">
                  <h3 className="product-heading">Color : </h3>

                  <Color />
                </div>
                <div className="align-items-center  mb-3 d-flex gap-10 mt-4">
                  <h3 className="product-heading">Quantity : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <input
                      type="number"
                      style={{ width: "150px" }}
                      min={1}
                      max={10}
                      defaultValue={1}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <Link className="button border-0 mb-3">Add to Cart</Link>
                  <Link className="button border-0 mb-3">Buy It Now</Link>
                </div>
                <div className="d-flex align-items-center gap-30 ">
                  <div>
                    <MdCompareArrows className="fs-5 me-2" />
                    <a className="cart-btn" href="#000">
                      {" "}
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <AiFillHeart className="fs-5 me-2" />
                    <a className="buy-btn" href="#000">
                      {" "}
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="mt-5">
                  <Accordion
                    className="border-0 mb-4"
                    allowZeroExpanded
                    allowMultipleExpanded
                  >
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="status">
                          <FaCarSide className="fs-5 me-2" /> Shipping and
                          Returns
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="accordion-details">
                          Free Shipping and returns available on all orders!{" "}
                          <br />
                          We ship all US domestic orders within{" "}
                          <strong>5-10 business days !</strong>
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem className="mt-3">
                      <AccordionItemHeading>
                        <AccordionItemButton className="status">
                          <SiMaterialdesign className="fs-5 me-2" />
                          Materials
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="accordion-details">
                          Running Shoes cushions your stride with soft foam to
                          keep you running in comfort.Lightweight knit material
                          wraps your foot in breathable support,while a
                          minimalist design fits in just about anywhere your day
                          takes you.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="mt-3">
                      <AccordionItemHeading>
                        <AccordionItemButton className="status">
                          <GiWoodStick className="fs-5 me-2" />
                          Dimesions
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="accordion-details">
                          Running Shoes cushions your stride with soft foam to
                          keep you running in comfort.Lightweight knit material
                          wraps your foot in breathable support,while a
                          minimalist design fits in just about anywhere your day
                          takes you.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className="mt-3">
                      <AccordionItemHeading>
                        <AccordionItemButton className="status">
                          <AiFillHeart className="fs-5 me-2" />
                          Care Instruction
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="accordion-details">
                          Running Shoes cushions your stride with soft foam to
                          keep you running in comfort.Lightweight knit material
                          wraps your foot in breathable support,while a
                          minimalist design fits in just about anywhere your day
                          takes you.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-3">
              <h4>Description</h4>
              <p>
                LoremDuis duis occaecat fugiat reprehenderit ex irure eiusmod
                labore minim. Est anim nisi nostrud est anim. Laboris incididunt
                non eiusmod amet enim.Cillum enim eiusmod ut velit voluptate.
                Amet nisi et sunt culpa amet amet dolore. Fugiat ut
                reprehenderit commodo officia minim aliqua ea. Irure sunt et
                occaecat proident aute non cillum aute. Labore occaecat ad ex
                nulla officia ullamco veniam occaecat nulla minim qui.In
                incididunt enim veniam fugiat nisi enim. Fugiat irure laboris
                pariatur do nulla velit veniam cupidatat aute proident ipsum
                anim aliquip commodo. Labore amet elit tempor pariatur pariatur
                eu sunt consectetur fugiat exercitation velit aliquip anim esse.
                Mollit labore dolor Lorem quis fugiat excepteur excepteur
                cupidatat aliqua anim ipsum.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        {" "}
        <div className="row">
          <div className="col-12">
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-3">Customer Review</h4>
                <div className="d-flex gap-10 align-items-center">
                  <ReactStars
                    classNames="mb-3"
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value="3"
                  />
                  <p className="mb-3">Based on 2 reviews</p>
                </div>
              </div>
              {orderedProduct && (
                <div>
                  <a
                    className="text-dark text-decoration-underline mb-3"
                    href="/"
                  >
                    Write a Review
                  </a>
                </div>
              )}
            </div>
            <div className="review-form">
              <h5 className="mt-3 mb-3">Write a Review</h5>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label for="exampleInputPassword1" className="form-label">
                    Ratings
                  </label>

                  <ReactStars
                    classNames="mb-3"
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value="0"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Review Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Give your review title"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Body of Review(1500)
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Write your comments here"
                  />
                </div>

                <button type="submit" className="button border-0">
                  Submit
                </button>
              </form>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="d-flex gap-10 align-items-center mt-3">
                  <h6 className="mb-0">Navdeep</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="#ffd700"
                    value="3"
                  />
                </div>
                <p className="mt-3">
                  Minim adipisicing dolore et ipsum aliqua eu voluptate
                  exercitation pariatur mollit id sit aliqua laborum. Laboris
                  nulla tempor Lorem exercitation non sint occaecat minim magna
                  exercitation proident pariatur in minim. Id Lorem ad ipsum et
                  anim. Voluptate cillum duis nisi exercitation culpa occaecat
                  sunt nisi occaecat. Proident anim sint nisi esse. Eiusmod
                  incididunt Lorem veniam non amet incididunt ut quis. Voluptate
                  sunt et cillum exercitation mollit nulla nulla minim cillum
                  esse mollit excepteur id consequat.
                </p>
              </div>
            </div>
          </div>
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

     
    </>
  );
};

export default SingleProduct;
