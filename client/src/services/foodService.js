export async function fetchAllFood() {
    try{
        const res = await fetch('http://localhost:3001/food');
        const data = await res.json();
        return data;
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