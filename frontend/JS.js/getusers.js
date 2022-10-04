import { userimp } from "./user.js";
import {chatPopup} from "./chatpopup.js"

export const GetUsers = async () => {

    if (document.getElementById("users-row")) {

        let usersHTML = "";
        const url = "http://127.0.0.1:8000/api/get_users";
        const users = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        console.log(users)
        users.data.user.map(user => {
            usersHTML += userimp(user);
        })

        if (document.getElementById("users-row")) {
            document.getElementById("users-row").innerHTML = usersHTML;
        }

        const users_section = Array.prototype.slice.call(document.getElementsByClassName("sendmsg"));
        users_section.forEach(user => {
            user.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                console.log(id);
                chatPopup(id);

            })
        });

    }
}