import {favoriteimp} from "./favorite.js"
import {removeFavorite} from "./remove-favorite.js"

export const getFavorite =async (id)=>{
   

    if (document.getElementById("favorite-row")) {
        let usersHTML = "";
        const url = `http://127.0.0.1:8000/api/get_favorites`;
        const favorites = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        console.log(favorites.data.data[0].name)
        favorites.data.data.map(favorite => {
            usersHTML += favoriteimp(favorite);
        })

        if (document.getElementById("favorite-row")) {
            document.getElementById("favorite-row").innerHTML = usersHTML;
        }

        const users_section = Array.prototype.slice.call(document.getElementsByClassName("sendmsg"));
        users_section.forEach(user => {
            user.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                chatPopup(id);

            })
        });

        const delete_favorites = Array.prototype.slice.call(document.getElementsByClassName("favorite-remove"));
        delete_favorites.forEach(user => {
            user.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                removeFavorite(id);

            })
        });
}
}