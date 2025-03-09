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
        price: 3.49,
        description: "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsz9eXYu1uA-ahCZspJW39V9DyzqgGQ9N5pA&s"
    },
    {
        id: "f3c7e0d2-34cd-6f8d-a1g2-345678900003",
        name: "Chocolate Cake",
        category: "Dessert",
        price: 15.99,
        description: "Rich and moist chocolate cake topped with ganache.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hDj7njGxosYemhW_ffWIev4KX4QfE1CDRQ&s"
    },
    {
        id: "f4c7e0d2-34cd-468d-a1g2-33590004583",
        name: "Musaka",
        category: "Home",
        price: 4.99,
        description: "Delicious combo of minced meat, potatoes and other.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF44d5sbQTvERpxYa_zGYz999AbQiZ84tyg&s"
    },
    {
        id: "f5d8f1e3-45de-7h9e-b2h3-456789012004",
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 14.99,
        description: "Classic pepperoni pizza with crispy crust and melty cheese.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg"
    },
    {
        id: "f6e9g2f4-56ef-8i0f-c3j4-567890123005",
        name: "BBQ Chicken Pizza",
        category: "Pizza",
        price: 13.99,
        description: "Topped with smoky BBQ sauce, grilled chicken, and onions.",
        image: "https://www.budgetbytes.com/wp-content/uploads/2020/06/BBQ-Chicken-Pizza-one-slice.jpg"
    },
    {
        id: "f7f0h3g5-67fg-9j1g-d4k5-678901234006",
        name: "Strawberry Cheesecake",
        category: "Dessert",
        price: 16.99,
        description: "Creamy cheesecake topped with fresh strawberries and glaze.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDEf3276mbjrZJlJZv-xYimIC0UysiCyLBA&s"
    },
    {
        id: "f8g1i4h6-78gh-0k2h-e5l6-789012345007",
        name: "Tiramisu",
        category: "Dessert",
        price: 18.99,
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZFj9x1IEgOoIYskg_5vl2QdKS4hQG4eXHKQ&s"
    },
    {
        id: "f9h2j5i7-89hi-1l3j-f6m7-890123456008",
        name: "Stuffed Peppers",
        category: "Home",
        price: 6.99,
        description: "Bell peppers stuffed with seasoned rice and ground beef.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlA5LmE5oSFo2jjgzn35MrpyOh6LqafbVig&s"
    },
    {
        id: "f0i3k6j8-90ij-2m4k-g7n8-901234567009",
        name: "Beef Stroganoff",
        category: "Home",
        price: 10.99,
        description: "Tender beef strips in a creamy mushroom sauce served over noodles.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEsYfWM6GdpyrccRQKLEX_Z8VtL5b44C24Q&s"
    }
];


app.get('/food', (req, res) => {
    res.json(food);
});


app.get('/food/:id', (req, res) => {
    const id = req.params.id;
    const currentFood = food.find(curFood => curFood.id == id);
    res.json(currentFood);
});

app.get('/recommendedFood/:category', (req, res) => {
    let recommendedFood = [];
    for(let curFood of food){
        if(curFood.category === req.params.category){
            recommendedFood.push(curFood);
        }
    }

    res.json(recommendedFood);
});

app.listen(PORT, console.log(`http://localhost:${PORT}`));


