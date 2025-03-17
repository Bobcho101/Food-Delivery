import { useEffect, useState } from "react";
import { fetchAllFood } from "../services/foodService";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function OrderFood() {
    const [food, setFood] = useState([]);
    const [allFood, setAllFood] = useState([]); 
    const [pending, setPending] = useState(false);
    const [sortOption, setSortOption] = useState('name-asc');
    const [searchQuery, setSearchQuery] = useState('');

    const getFood = async (sort) => {
        setPending(true);
        let fetchedFood = await fetchAllFood();
        if(sort === 'name-asc'){
            fetchedFood.sort((a, b) => a.name.localeCompare(b.name));
        } else if(sort === 'name-desc'){
            fetchedFood.sort((a, b) => b.name.localeCompare(a.name));
        } else if(sort === 'price-asc'){
            fetchedFood.sort((a, b) => a.price - b.price);
        } else if(sort === 'price-desc'){
            fetchedFood.sort((a, b) =>  b.price - a.price);
        }

        setAllFood(fetchedFood);
        setFood(fetchedFood); 
        setPending(false);
    }



    useEffect(() => {
        getFood(sortOption);
    }, [sortOption]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredFood = allFood.filter((curFood) =>
            curFood.name.toLowerCase().includes(query)
        );

        setFood(filteredFood);
    };

    return (
        <div className="bg-[#1E1B18] text-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
                <h2 className="text-3xl font-bold tracking-tight text-[#FFB703]">Menu</h2>

                {/* Search and Sort Controls */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3 items-center">
                    <div className="flex items-center gap-3">
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

                    {/* Search Input with Clear Button */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Search food..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full bg-[#2A2523] text-gray-100 p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setFood(allFood); 
                                }}
                                className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                    {pending ? (
                        <div className="flex justify-center items-center h-[60vh]">
                            <div className="w-12 h-12 border-4 border-[#FFB703] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : food.map((curFood, index) => ( 
                        <motion.div 
                            key={curFood.id}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1  }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Link to={`/order-food/${curFood.id}`}>
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    );
}