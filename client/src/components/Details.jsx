import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchOneFood } from "../services/foodService";

export default function Details() {
    const [food, setFood] = useState({});
    const getOneFood = async () => {
        setFood(await fetchOneFood());
    }

    useEffect(() => {
        getOneFood();
    }, []);
    return (
        
        
        <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-[#2A2523] p-8 rounded-lg shadow-lg">
            <Link to={"/order-food"}>
            <button className="bg-[#FFB703] cursor-pointer text-[#1E1B18] font-semibold text-lg py-1 px-4 mb-6 inline-flex items-center rounded-md hover:bg-[#E89B00] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:ring-offset-2 transition-all duration-300">
                Back
            </button>
            </Link>
            <div className="flex justify-center">
                <img
                src={food.image}
                alt={food.name}
                className="rounded-md object-cover w-full h-96 lg:h-[400px] mb-6"
                />
            </div>
            <h2 className="text-3xl font-bold text-[#FFB703]">Spaghetti Carbonara</h2>
            <p className="text-md text-gray-300 mt-2">
                A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple, but incredibly delicious.
            </p>


            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#FFB703]">Description:</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere inventore aperiam sapiente blanditiis magnam deleniti eum amet porro. Nostrum hic commodi laudantium quasi possimus velit. Repellat minus eum vero asperiores repudiandae voluptate labore soluta, ullam consectetur iusto omnis veritatis quas alias excepturi autem dolorem doloremque dolorum deserunt nostrum nesciunt quia.</p>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-[#FFB703]">You might also like:</h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                    <img
                    alt="Food"
                    src="https://via.placeholder.com/200x200.png?text=Pasta"
                    className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-100">Penne Arrabbiata</h3>
                    <p className="text-md font-semibold text-[#FFB703]">15.99 lv.</p>
                </div>

                <div className="bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                    <img
                    alt="Food"
                    src="https://via.placeholder.com/200x200.png?text=Pizza"
                    className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-100">Margherita Pizza</h3>
                    <p className="text-md font-semibold text-[#FFB703]">12.99 lv.</p>
                </div>

                <div className="bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                    <img
                    alt="Food"
                    src="https://via.placeholder.com/200x200.png?text=Salad"
                    className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-100">Caesar Salad</h3>
                    <p className="text-md font-semibold text-[#FFB703]">9.99 lv.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}