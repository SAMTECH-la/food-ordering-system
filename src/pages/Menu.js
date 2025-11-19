import React from "react";
import { Link } from "react-router-dom";
import foodItems from "../data";
import "./../styles/Menu.css";  // ✅ Add this

const Menu = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">🍽️ Explore Our Menu</h2>

      <div className="row justify-content-center">
        {foodItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card menu-card shadow-sm">
              <img src={item.image} className="card-img-top menu-img" alt={item.name} />

              <div className="card-body text-center">
                <h5 className="card-title fw-semibold">{item.name}</h5>

                <Link
                  to={`/menu/${encodeURIComponent(item.name.toLowerCase())}`}
                  className="view-btn mt-3"
                >
                  <span>View Types</span>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
