import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import OrderStatus from "./pages/OrderStatus";
import Chat from "./pages/Chat";

import AdminDashboard from "./admin/AdminDashboard";
import ManageMenu from "./admin/ManageMenu";
import ManageOrders from "./admin/ManageOrders";
import Messages from "./admin/Messages";

import Login from "./auth/Login";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import "./App.css";
import ItemTypes from "./pages/ItemTypes";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";


const ProtectedRoute = ({ children, allowedFor }) => {
  const { userType } = useContext(AuthContext);

  if (userType === null) return <Navigate to="/" replace />;
  if (allowedFor && userType !== allowedFor)
    return <h2 className="text-center mt-5 text-danger">🚫 Access Denied</h2>;

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/" element={<Login />} />

      {/* USER ROUTES */}
      <Route
        path="/home"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <Home />
            <Footer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/menu"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <Menu />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* ITEM TYPES ROUTE */}
      <Route
        path="/menu/:name"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <ItemTypes />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* CART */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <Cart />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* PAYMENT PAGE — FIXED LOCATION */}
      <Route
        path="/payment"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <Payment />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* ORDER STATUS */}
      <Route
        path="/order-status"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <OrderStatus />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* CHAT */}
      <Route
        path="/chat"
        element={
          <ProtectedRoute allowedFor="user">
            <Navbar />
            <Chat />
            <Footer />
          </ProtectedRoute>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedFor="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/menu"
        element={
          <ProtectedRoute allowedFor="admin">
            <ManageMenu />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute allowedFor="admin">
            <ManageOrders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/messages"
        element={
          <ProtectedRoute allowedFor="admin">
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
  path="/order-success"
  element={
    <ProtectedRoute allowedFor="user">
      <Navbar />
      <OrderSuccess />
      <Footer />
    </ProtectedRoute>
  }
/>


      {/* DEFAULT REDIRECT */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
