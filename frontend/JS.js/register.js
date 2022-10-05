export const register = ()=>{


    document.getElementById("registerr").addEventListener("click", async () => {
        let data= JSON.stringify({
            name:document.getElementById('name').value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            gender:document.getElementById("gender").value,
            gender_intersted:document.getElementById("gender-intersted").value,
            bio:document.getElementById("bio").value,
            age:document.getElementById("age").value,
            profile:document.getElementById("profile").value
        })
        const url = `http://127.0.0.1:8000/api/register`;
        const users = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        console.log(users)
    })
}