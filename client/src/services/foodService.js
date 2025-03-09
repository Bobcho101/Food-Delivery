export async function getAllFood() {
    try{
        const res = await fetch('http://localhost:3001/food');
        const data = await res.json();
        return data;
    } catch(err){
        console.log(err.message);
    }
}