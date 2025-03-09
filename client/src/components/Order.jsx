import { useEffect, useState } from "react";
import { fetchAllFood } from "../services/foodService";

export default function OrderFood() {
    const [food, setFood] = useState([]);

    const getFood = async () => {
        setFood(await fetchAllFood());
    }

    useEffect(() => {
        getFood();
    }, [])


    
    return (
        <div className="bg-[#1E1B18] text-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#FFB703]">Customers also purchased</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {food.map((curFood) => (
            <div key={curFood.id} className="group relative bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                <img
                alt={curFood.name}
                src={curFood.image}
                className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                />
                <div className="mt-4 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                    <a className="hover:text-[#E63946]">
                        {curFood.name}
                    </a>
                    </h3>
                </div>
                <p className="text-md font-semibold text-[#FFB703]">{curFood.price}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    );
}