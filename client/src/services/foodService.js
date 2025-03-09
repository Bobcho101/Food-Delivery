export async function fetchAllFood(categoryFilter, curFoodId) {
    try{
        if(!categoryFilter){
            const res = await fetch('http://localhost:3001/food');
            const data = await res.json();
            return data;
        } else{
            const res = await fetch(`http://localhost:3001/recommendedFood/${categoryFilter}`);
            let data = await res.json(); 

            if(curFoodId){
                data = data.filter(curFood => curFood.id !== curFoodId);
            }

            data = data.slice(0, 3);
            return data;
        }
        
        
    } catch(err){
        console.log(err.message);
    }
}

export async function fetchOneFood(id) {
    try{
        const res = await fetch(`http://localhost:3001/food/${id}`);
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err.message);
    }
}