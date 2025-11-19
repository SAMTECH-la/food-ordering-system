import React, { useState, useEffect } from "react";
import "../App.css";

// ✅ Import your local images from src folder
import pizzaImg from "../assets/pizza.png";
import burgerImg from "../assets/burger.png";
import drinkImg from "../assets/drinks.png";
import sweetImg from "../assets/sweet.png";

const Home = () => {
  const slogans = [
    "Delicious Food, Delivered Fast 🚀",
    "Fresh Meals, Right at Your Door 🍔",
    "Taste the Magic of Every Bite 🍕",
  ];
  
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <div className="home d-flex flex-column justify-content-center align-items-center text-center">
      <div className="floating-icons">
        <img src={pizzaImg} alt="Pizza" className="icon pizza" />
        <img src={burgerImg} alt="Burger" className="icon burger" />
        <img src={drinkImg} alt="Drink" className="icon drink" />
        <img src={sweetImg} alt="sweet" className="icon sweet" />
      </div>

      <h1 className="dynamic-heading animate__animated animate__fadeInDown">
        {slogans[currentSlogan]}
      </h1>

      <p className="subtext animate__animated animate__fadeInUp">
        Get your favorite dishes from the best restaurants — hot, fresh, and fast.
      </p>

      <a href="/menu" className="btn btn-lg order-btn shadow">
        Order Now 🍴
      </a>
    </div>
  );
};

export default Home;
