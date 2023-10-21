import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { FiArrowLeft } from "react-icons/fi";
import Container from "../components/Container";
const SingleBlog = () => {
  return (
    <>
      <BreadCrum title={"Single Blog"} />
      <Meta title="Single Blog" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
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
          </div>
          <div className="col-9">
            <div className="single-blog-card">
              <h3>A Beautiful Sunday Morning</h3>

              <img
                src="images/blog-1.jpg"
                className="img-fluid mt-2"
                alt="single-blog"
              />

              <p className="mt-3">
                Consequat non minim sit sunt laboris tempor cillum id pariatur
                eu incididunt aliquip ipsum. In labore voluptate proident duis
                ad labore aute reprehenderit minim. Est dolore consequat
                pariatur anim exercitation est enim esse ipsum exercitation
                exercitation laboris veniam. Cupidatat nostrud non consectetur
                adipisicing. Officia cillum ad dolor id. Magna deserunt ea
                proident in nulla ad. Eiusmod laboris voluptate voluptate tempor
                cillum laborum eiusmod laboris.Consequat labore exercitation ea
                occaecat laboris. Cupidatat eiusmod nulla ipsum incididunt enim
                incididunt tempor sunt laborum sint excepteur nostrud. Ut ad
                Lorem est et voluptate mollit voluptate deserunt enim. Proident
                aute velit ullamco ea officia duis laborum nisi culpa culpa
                minim aliquip sit. Consequat non minim sit sunt laboris tempor
                cillum id pariatur eu incididunt aliquip ipsum. In labore
                voluptate proident duis ad labore aute reprehenderit minim. Est
                dolore consequat pariatur anim exercitation est enim esse ipsum
                exercitation exercitation laboris veniam. Cupidatat nostrud non
                consectetur adipisicing. Officia cillum ad dolor id. Magna
                deserunt ea proident in nulla ad. Eiusmod laboris voluptate
                voluptate tempor cillum laborum eiusmod laboris.Consequat labore
                exercitation ea occaecat laboris. Cupidatat eiusmod nulla ipsum
                incididunt enim incididunt tempor sunt laborum sint excepteur
                nostrud. Ut ad Lorem est et voluptate mollit voluptate deserunt
                enim. Proident aute velit ullamco ea officia duis laborum nisi
                culpa culpa minim aliquip sit. Consequat non minim sit sunt
                laboris tempor cillum id pariatur eu incididunt aliquip ipsum.
                In labore voluptate proident duis ad labore aute reprehenderit
                minim. Est dolore consequat pariatur anim exercitation est enim
                esse ipsum exercitation exercitation laboris veniam. Cupidatat
                nostrud non consectetur adipisicing. Officia cillum ad dolor id.
                Magna deserunt ea proident in nulla ad. Eiusmod laboris
                voluptate voluptate tempor cillum laborum eiusmod
                laboris.Consequat labore exercitation ea occaecat laboris.
                Cupidatat eiusmod nulla ipsum incididunt enim incididunt tempor
                sunt laborum sint excepteur nostrud. Ut ad Lorem est et
                voluptate mollit voluptate deserunt enim. Proident aute velit
                ullamco ea officia duis laborum nisi culpa culpa minim aliquip
                sit. Consequat non minim sit sunt laboris tempor cillum id
                pariatur eu incididunt aliquip ipsum. In labore voluptate
                proident duis ad labore aute reprehenderit minim. Est dolore
                consequat pariatur anim exercitation est enim esse ipsum
                exercitation exercitation laboris veniam. Cupidatat nostrud non
                consectetur adipisicing. Officia cillum ad dolor id. Magna
                deserunt ea proident in nulla ad. Eiusmod laboris voluptate
                voluptate tempor cillum laborum eiusmod laboris.Consequat labore
                exercitation ea occaecat laboris. Cupidatat eiusmod nulla ipsum
                incididunt enim incididunt tempor sunt laborum sint excepteur
                nostrud. Ut ad Lorem est et voluptate mollit voluptate deserunt
                enim. Proident aute velit ullamco ea officia duis laborum nisi
                culpa culpa minim aliquip sit. Consequat non minim sit sunt
                laboris tempor cillum id pariatur eu incididunt aliquip ipsum.
                In labore voluptate proident duis ad labore aute reprehenderit
                minim. Est dolore consequat pariatur anim exercitation est enim
                esse ipsum exercitation exercitation laboris veniam. Cupidatat
                nostrud non consectetur adipisicing. Officia cillum ad dolor id.
                Magna deserunt ea proident in nulla ad. Eiusmod laboris
                voluptate voluptate tempor cillum laborum eiusmod
                laboris.Consequat labore exercitation ea occaecat laboris.
                Cupidatat eiusmod nulla ipsum incididunt enim incididunt tempor
                sunt laborum sint excepteur nostrud. Ut ad Lorem est et
                voluptate mollit voluptate deserunt enim. Proident aute velit
                ullamco ea officia duis laborum nisi culpa culpa minim aliquip
                sit.
              </p>
              <Link to="/blogs">
                {" "}
                <FiArrowLeft /> Go back to Blogs{" "}
              </Link>
            </div>
            <div className="blog-comment-card mt-5">
              <h4>Leave a Comment</h4>
              <div className="d-flex align-items-center gap-10 mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name *"
                  aria-label="to"
                  aria-describedby="basic-addon1"
                />

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email *"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Comment *"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <button className="button border-0 mt-4 mb-4">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </Container>
  
    </>
  );
};

export default SingleBlog;
