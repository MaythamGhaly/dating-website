export const addBlock = async (id)=>{

    const url = `http://127.0.0.1:8000/api/block_user/${id}`;
    await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
    console.log("yes")

}