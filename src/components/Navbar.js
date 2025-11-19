// src/components/Navbar.js
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // ✅ for logout
import { useCart } from "../context/CartContext"; // ✅ FIXED import

function Navbar() {
  const { cart } = useCart(); // ✅ Updated to use `useCart`
  const { logout, userType } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-nav sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-white fs-3" to="/home">
          🍴 FoodieHub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chat">
                Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-warning" to="/cart">
                🛒 Cart ({cart.length})
              </Link>
            </li>

            <li className="nav-item ms-3">
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline-light px-3 fw-semibold"
                style={{ borderRadius: "8px" }}
              >
                Logout
              </button>
            </li>

            {userType && (
              <li className="nav-item ms-2 text-light small">
                ({userType.toUpperCase()})
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
