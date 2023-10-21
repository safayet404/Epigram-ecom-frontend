import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">01 September 2023</p>
          <h5 className="title">A beautiful Sunday morning renaissance</h5>
          <p className="desc">
            Dolore proident laborum cupidatat nulla commodo consectetur nisi
            occaecat culpa consectetur quis consequat est. Lorem laboris ut
            officia tempor consectetur ut Lorem.
         
          </p>
          <Link to="/single-blogs" className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
