import express from "express";
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

const food = [
    {
      id: "f1a5e8c0-12ab-4d6b-89e7-123456789001",
      name: "Margherita Pizza",
      category: "Pizza",
      price: 12.99,
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
      image: "https://www.bekiacocina.com/images/cocina/0000/238-h.jpg"
    },
    {
      id: "f2b6d9c1-23bc-5e7c-90f8-234567890002",
      name: "Cheeseburger",
      category: "Burger",
      price: 9.49,
      description: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz9eXYu1uA-ahCZspJW39V9DyzqgGQ9N5pA&s"
    },
    {
      id: "f3c7e0d2-34cd-6f8d-a1g2-345678900003",
      name: "Chocolate Cake",
      category: "Dessert",
      price: 6.99,
      description: "Rich and moist chocolate cake topped with ganache.",
      image: "https://example.com/chocolate-cake.jpg"
    }
];


app.get('/food', (req, res) => {
    res.json(food);
});




app.listen(PORT, console.log(`http://localhost:${PORT}`));


