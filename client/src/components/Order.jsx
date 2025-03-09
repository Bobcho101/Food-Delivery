import { useEffect, useState } from "react";
import { fetchAllFood } from "../services/foodService";
import { Link } from "react-router";

export default function OrderFood() {
    const [food, setFood] = useState([]);
    const [sortOption, setSortOption] = useState('name-asc');

    const getFood = async (sort) => {
        const allFood = await fetchAllFood();
        if(sort === 'name-asc'){
            allFood.sort((a, b) => a.name.localeCompare(b.name));
        } else if(sort === 'name-desc'){
            allFood.sort((a, b) => b.name.localeCompare(a.name));
        } else if(sort === 'price-asc'){
            allFood.sort((a, b) => a.price - b.price);
        } else if(sort === 'price-desc'){
            allFood.sort((a, b) =>  b.price - a.price);
        }
        setFood(allFood); 
    }

    useEffect(() => {
        getFood(sortOption);
    }, [sortOption]);



    return (
        <div className="bg-[#1E1B18] text-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-[#FFB703]">Menu</h2>
        <div className="mt-6 flex justify-start gap-3 items-center">
                <label htmlFor="sort" className="text-gray-100 text-lg font-semibold">Sort by:</label>
                <select
                    id="sort"
                    value={sortOption}
                    className="bg-[#2A2523] text-gray-100 p-2 rounded-md"
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="price-asc">Price (Low to High)</option>
                    <option value="price-desc">Price (High to Low)</option>
                </select>
            </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {food.map((curFood) => (
            <Link to={`/order-food/${curFood.id}`} key={curFood.id}>
                <div className="group relative bg-[#2A2523] p-4 rounded-lg shadow-md cursor-pointer">
                   
                    <img
                    alt={curFood.name}
                    src={curFood.image}
                    className="aspect-square w-full rounded-md object-cover transition duration-300 group-hover:opacity-80"
                    />
                    <div className="mt-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-100">
                            {curFood.name}
                        </h3>
                    </div>
                    <p className="text-md font-semibold text-[#FFB703]">{curFood.price} lv.</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
        </div>
    </div>
    );
}