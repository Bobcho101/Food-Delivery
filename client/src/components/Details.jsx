import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchAllFood, fetchOneFood } from "../services/foodService";

export default function Details() {
    const params = useParams();
 
    const [food, setFood] = useState({});
    const [recommendedFood, setRecommendedFood] = useState([]);
    
    const getOneFood = async (curFoodId) => {
        setFood(await fetchOneFood(curFoodId));
    }

    const getRecommendedFood = async (category, curFoodId) => {
        setRecommendedFood(await fetchAllFood(category, curFoodId));
    }

    
    useEffect(() => {
        getOneFood(params.id);
        getRecommendedFood(food.category, food.id)
    }, [params.id, food.category, food.id]);

    return (
        <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full bg-[#2A2523] p-8 rounded-lg shadow-lg">
            <Link to={"/order-food"}>
            <button className="bg-[#FFB703] cursor-pointer text-[#1E1B18] font-semibold text-lg py-1 px-4 mb-6 inline-flex items-center rounded-md hover:bg-[#E89B00] focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:ring-offset-2 transition-all duration-300">
                Back to Menu
            </button>
            </Link>
            <div className="flex justify-center">
                <img
                    src={food.image}
                    alt={food.name}
                    className="rounded-lg w-full h-auto max-h-[400px] object-contain"
                />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB703]">{food.name}</h2>
            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#00000]">{food.price} lv.</h3>
            </div>

            <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#FFB703]">Description:</h3>
                <p>{food.description}</p>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-[#FFB703]">You might also like:</h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedFood.length > 0 ? 
                recommendedFood.map((curFood) => 
                    (
                    <Link to={`/order-food/${curFood.id}`} key={curFood.id}>
                        <div className="bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                            <img
                            alt="Food"
                            src={curFood.image}
                            className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-gray-100">{curFood.name}</h3>
                            <p className="text-md font-semibold text-[#FFB703]">{curFood.price} lv.</p>
                        </div>
                   </Link>
                   ) )
                   : <h1 className="text-2xl font-semibold text-[#fffff] ml-3" >No Recommendations</h1>
                }
                </div>
            </div>
            </div>
        </div>
    );
}