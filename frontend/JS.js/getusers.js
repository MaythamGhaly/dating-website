import { userimp } from "./user.js";

export const GetProducts = async () => {

    if (document.getElementById("users-row")) {
       
            let usersHTML = "";
            console.log(localStorage.getItem(`token`))
            const url = "http://127.0.0.1:8000/api/get_users";
            const users = await axios.get(url, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
            users.data.user.map(user => {
                usersHTML += userimp(user);
            })
            
            if(document.getElementById("users-row")){
                document.getElementById("users-row").innerHTML = usersHTML;
            }
            if (document.getElementById("send-msg")) {
                document.getElementById("send-msg").addEventListener("click", () => {
                    window.location.href = "../chat-page.html";
                })
            }
        
    }
}