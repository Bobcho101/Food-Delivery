import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchOneFood } from "../services/foodService";

export default function Details() {
    const params = useParams();
 
    const [food, setFood] = useState({});
    
    const getOneFood = async (paramsId) => {
        setFood(await fetchOneFood(paramsId));
    }

    
    useEffect(() => {
        getOneFood(params.id);
    }, [params.id]);

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
                    className="rounded-lg w-full h-auto max-h-[400px] object-contain"
                />
            </div>
            <h2 className="text-5xl font-bold text-[#FFB703]">{food.name}</h2>


            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#FFB703]">Description:</h3>
                <p>{food.description}</p>
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