import { userimp } from "./user.js";
import { chatPopup } from "./chatpopup.js"
import { addFavorite } from "./add-favorite.js"
import { addBlock } from "./add-block.js"

export const GetUsers = async () => {

    if (document.getElementById("users-row")) {

        let usersHTML = "";
        const url = "http://127.0.0.1:8000/api/get_users";
        const users = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        let users_info = users.data.user
        console.log(users_info[0].latitude)
        users.data.user.map(user => {
            usersHTML += userimp(user);
        })
        // function to calculate the distance between two users (incomplete)
        // for (let i = 0; i < users_info.length; i++) {
        //     const lat1 = users_info[i].latitude
        //     const lon1 = users_info[i].longitude
        //     const _lat1 = 12.904778;
        //     const _lon1 = 77.585680;

        //     //distance calculation
        //     function _getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        //         var R = 6371; // Radius of the earth in kilometers
        //         var dLat = deg2rad(lat2 - lat1); // deg2rad below
        //         var dLon = deg2rad(lon2 - lon1);
        //         var a =
        //             Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        //             Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        //             Math.sin(dLon / 2) * Math.sin(dLon / 2);
        //         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //         var d = R * c; // Distance in KM
        //         return d;
        //     }
        //     function deg2rad(deg) {
        //         return deg * (Math.PI / 180)
        //     }
        //     // precise value
        //     var _d = "Precise value: " + _getDistanceFromLatLonInKm(_lat1, _lon1, _lat2, _lon2);
        //     _d = Math.round(_getDistanceFromLatLonInKm(_lat1, _lon1, _lat2, _lon2) * 100) / 100;
        //     console.log(_d);
        // }
        if (document.getElementById("users-row")) {
            document.getElementById("users-row").innerHTML = usersHTML;
        }

        const users_section = Array.prototype.slice.call(document.getElementsByClassName("sendmsg"));
        users_section.forEach(user => {
            user.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                chatPopup(id);

            })
        });

        const favorites = Array.prototype.slice.call(document.getElementsByClassName("favorite-icon"));
        favorites.forEach(favorite => {
            favorite.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                addFavorite(id);
            })
        });

        const blocks = Array.prototype.slice.call(document.getElementsByClassName("blocks-icon"));
        blocks.forEach(block => {
            block.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                addBlock(id);
            })
        });

    }
}