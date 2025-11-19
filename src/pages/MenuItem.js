import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import foodItems from "../data";
import { CartContext } from "../context/CartContext";
import "../App.css";

const MenuItem = () => {
  const { id } = useParams();
  const item = foodItems.find((f) => f.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState({});
  const [sortBy, setSortBy] = useState(""); // "price" or "popularity"

  if (!item) return <p className="text-center mt-5">Item not found!</p>;

  const handleAdd = (type) => {
    const quantity = quantities[type.id] || 1;
    addToCart({ ...type, parentItem: item.name, quantity });
    alert(`${quantity} x ${type.name} added to cart!`);
  };

  const handleQuantityChange = (typeId, value) => {
    setQuantities({ ...quantities, [typeId]: parseInt(value) });
  };

  let sortedTypes = [...item.types];
  if (sortBy === "price") sortedTypes.sort((a, b) => a.price - b.price);
  if (sortBy === "popularity") sortedTypes.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">{item.name} Options</h2>

      {/* Dropdown Sorting */}
      <div className="d-flex justify-content-center mb-4">
        <div className="dropdown">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            id="sortDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort By {sortBy ? `(${sortBy})` : ""}
          </button>
          <ul className="dropdown-menu" aria-labelledby="sortDropdown">
            <li>
              <button className="dropdown-item" onClick={() => setSortBy("price")}>
                Price: Low → High
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setSortBy("popularity")}>
                Popularity
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => setSortBy("")}>
                None
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        {sortedTypes.map((type) => (
          <div className="col-md-4 mb-4" key={type.id}>
            <div className="card h-100 text-center shadow-sm type-card">
              <img src={type.image} className="card-img-top" alt={type.name} />
              <div className="card-body">
                <h5 className="card-title">{type.name}</h5>
                <p className="card-text">Price: ${type.price}</p>
                <p className="card-text text-muted">Popularity: {type.popularity}</p>

                <div className="mb-2">
                  <label className="me-2">Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantities[type.id] || 1}
                    onChange={(e) => handleQuantityChange(type.id, e.target.value)}
                    className="form-control d-inline-block"
                    style={{ width: "70px" }}
                  />
                </div>

                <button className="btn btn-success" onClick={() => handleAdd(type)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
