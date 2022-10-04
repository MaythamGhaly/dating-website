export const removeFavorite = async (id)=>{

    const url = `http://127.0.0.1:8000/api/delete_favorite/${id}`;
    await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
    console.log("yes")

}