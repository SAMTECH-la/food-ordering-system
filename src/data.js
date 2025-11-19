const foodItems = [
  {
    id: 1,
    name: "Pizza",
    image: "/images/Pepperoni-Pizza.jpg",
    types: [
      { id: 1, name: "Margherita", price: 199, popularity: 4.5, image: "/images/Margherita-Pizza.jpg" },
      { id: 2, name: "Pepperoni", price: 249, popularity: 4.8, image: "/images/Pepperoni-Pizza.jpg" },
      { id: 3, name: "Veggie Supreme", price: 229, popularity: 4.6, image: "/images/Veggie-Supreme-Pizza.png" },
      { id: 4, name: "Cheese Burst", price: 269, popularity: 4.9, image: "/images/Buffalo-Chicken-Pizza.png" },
      { id: 5, name: "Paneer Tikka", price: 259, popularity: 4.7, image: "/images/Hawaiian-Pizza.png" },
      { id: 6, name: "Mexican Green Wave", price: 239, popularity: 4.5, image: "/images/Meat-Lovers-Pizza.png" },
      { id: 7, name: "Farmhouse", price: 219, popularity: 4.3, image: "/images/Detroit-Style-Pizza.png" },
      { id: 8, name: "BBQ Chicken", price: 289, popularity: 4.8, image: "/images/BBQ-Chicken-Pizza.png" },
      { id: 9, name: "Deluxe Veggie", price: 249, popularity: 4.4, image: "/images/Truffle-Mushroom-Pizza.png" },
      { id: 10, name: "Spicy Triple Tango", price: 279, popularity: 4.6, image: "/images/Pesto-Burrata-Pizza.png" },
    ],
  },
  {
    id: 2,
    name: "Burger",
    image: "/burger.jpg",
    types: [
      { id: 1, name: "Cheese Burger", price: 149, popularity: 4.6, image: "/images/chicken-burger.png" },
      { id: 2, name: "Veggie Burger", price: 129, popularity: 4.3, image: "/images/cheese-burger.png" },
      { id: 3, name: "Crispy Chicken Burger", price: 179, popularity: 4.7, image: "/images/black-bean-burger.png" },
      { id: 4, name: "Paneer Burger", price: 159, popularity: 4.4, image: "/images/EIK-Burger.png" },
      { id: 5, name: "Double Patty Burger", price: 199, popularity: 4.8, image: "/images/Mushroom-Burger.png" },
      { id: 6, name: "Aloo Tikki Burger", price: 119, popularity: 4.2, image: "/images/salmon-burger.png" },
      { id: 7, name: "BBQ Burger", price: 189, popularity: 4.5, image: "/images/smash-burger.png" },
      { id: 8, name: "Classic Chicken Burger", price: 169, popularity: 4.6, image: "/images/turkey-burger.png" },
      { id: 9, name: "Mushroom Melt Burger", price: 179, popularity: 4.7, image: "/images/veggie-burger.png" },
      { id: 10, name: "Spicy Veggie Burger", price: 139, popularity: 4.4, image: "/images/spicyvegburger.png" },
    ],
  },
  {
    id: 3,
    name: "Pasta",
    image: "/images/sausage-Pasta.png",
    types: [
      { id: 1, name: "White Sauce Pasta", price: 159, popularity: 4.4, image: "/images/sausage-Pasta.png" },
      { id: 2, name: "Red Sauce Pasta", price: 149, popularity: 4.5, image: "/images/Spaghetti-Pasta.png" },
      { id: 3, name: "Mix Sauce Pasta", price: 169, popularity: 4.6, image: "/images/Creamy-Tomato-Pasta.png" },
      { id: 4, name: "Cheesy Alfredo", price: 179, popularity: 4.7, image: "/images/Pesto-Penne-Pasta.png" },
      { id: 5, name: "Arrabbiata", price: 149, popularity: 4.3, image: "/images/Baked-pasta.png" },
      { id: 6, name: "Mac and Cheese", price: 189, popularity: 4.8, image: "/images/Lasagna-Pasta.png" },
      { id: 7, name: "Pesto Pasta", price: 199, popularity: 4.5, image: "/images/Chicken-penne-Pasta.png" },
    ],
  },
  {
    id: 4,
    name: "Sweet",
    image: "/images/Gulab-Jamun.jpg",
    types: [
      { id: 1, name: "Gulab Jamun", price: 80, popularity: 4.8, image: "/images/Gulab-Jamun.jpg" },
      { id: 2, name: "Rasgulla", price: 90, popularity: 4.7, image: "/images/Gajar-ka-Halwa.jpg" },
      { id: 3, name: "Jalebi", price: 70, popularity: 4.6, image: "/images/Ghewar.jpg" },
      { id: 4, name: "Kaju Katli", price: 120, popularity: 4.9, image: "/images/rasgulla.jpg" },
      { id: 5, name: "Ladoo", price: 60, popularity: 4.5, image: "/images/jalebi.jpg" },
      { id: 6, name: "Barfi", price: 100, popularity: 4.4, image: "/images/kaju-katli.jpg" },
      { id: 7, name: "Rasmalai", price: 130, popularity: 4.8, image: "/images/motichoor-ladoo.jpg" },
      { id: 8, name: "Ice Cream", price: 90, popularity: 4.6, image: "/images/rasmallai.jpg" },
      { id: 9, name: "Chocolate Brownie", price: 140, popularity: 4.9, image: "/images/Basundi.png" },
      { id: 10, name: "Cheesecake", price: 160, popularity: 4.7, image: "/images/Sandesh.png" },
    ],
  },
  {
    id: 5,
    name: "Mojito",
    image: "/images/Mint-Mojito.png",
    types:[
      { id: 1, name: "Classic Mojito", price: 110, popularity: 4.6, image: "/images/Mint-Mojito.png" },
      { id: 2, name: "Strawberry Mojito", price: 130, popularity: 4.7, image: "/images/Coconut-Mojito.png" },
      { id: 3, name: "Mango Mojito", price: 140, popularity: 4.8, image: "/images/Strawberry-Mojito.png" },
      { id: 4, name: "Virgin Mojito", price: 100, popularity: 4.5, image: "/images/Blackberry-Mojito.png" },
      { id: 5, name: "Pineapple Mojito", price: 150, popularity: 4.9, image: "/images/Raspberry-Mojito.png" },
      { id: 6, name: "Coconut Mojito", price: 160, popularity: 4.7, image: "/images/Mango-Mojito-1.png" },
      { id: 7, name: "Blueberry Mojito", price: 170, popularity: 4.8, image: "/images/Cucumber-Mojito.png" },
      { id: 8, name: "Watermelon Mojito", price: 140, popularity: 4.6, image: "/images/Watermelon-Mojito.png" },
      { id: 9, name: "Peach Mojito", price: 150, popularity: 4.5, image: "/images/peachmojito.jpeg" },
      { id: 10, name: "Kiwi Mojito", price: 160, popularity: 4.7, image: "/images/kiwimojito.jpeg" },
    ]
  },
  {
    id: 6,
    name: "Hot-Coffee",
    image: "/images/cappuccino.png",
    types:[
      { id: 1, name: "Espresso", price: 100, popularity: 4.7, image: "/images/espresso.png" },
      { id: 2, name: "Cappuccino", price: 120, popularity: 4.8, image: "/images/cappuccino.png" },
      { id: 3, name: "Latte", price: 130, popularity: 4.6, image: "/images/latte.png" },
      { id: 4, name: "Americano", price: 110, popularity: 4.5, image: "/images/americano.png" },
      { id: 5, name: "Mocha", price: 140, popularity: 4.9, image: "/images/mocha.png" },
      { id: 6, name: "Macchiato", price: 125, popularity: 4.7, image: "/images/macchiato.png" },
      { id: 7, name: "Flat White", price: 135, popularity: 4.6, image: "/images/Almond-Milk-Latte.png" },
    ]
  },
  {
    id: 7,
    name: "Cold-Coffee",
    image: "/images/Classic-Cold-Coffee.png",
    types:[
      { id: 1, name: "Classic Cold Coffee", price: 120, popularity: 4.8, image: "/images/Classic-Cold-Coffee.png" },
      { id: 2, name: "Vanilla Cold Coffee", price: 130, popularity: 4.7, image: "/images/Frappuccino.png" },
      { id: 3, name: "Mocha Cold Coffee", price: 140, popularity: 4.9, image: "/images/Iced-Americano.png" },
      { id: 4, name: "Caramel Cold Coffee", price: 150, popularity: 4.6, image: "/images/Affogato.png" },
      { id: 5, name: "Hazelnut Cold Coffee", price: 160, popularity: 4.8, image: "/images/Cold-Brew.png" },
      
    ]
  }
];

export default foodItems;
