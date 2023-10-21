import React from "react";

const FamousCard = () => {
  return (
    <div className="col-3 mb-3">
      <div className="famous-card position-relative">
        <img src="images/famous-3.jpg" alt="famous" />
        <div className="famous-content position-absolute">
          <h5>Big Screen</h5>
          <h2>Smart Watch Series 7</h2>
          <p>From BDT 3900 or BDT 1600/mo for 24 mo.*</p>
        </div>
      </div>
    </div>
  );
};

export default FamousCard;
