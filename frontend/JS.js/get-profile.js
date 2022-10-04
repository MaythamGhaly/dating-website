import { profileimp } from "./profile.js"
export const getProfile = async (id) => {

            if (document.getElementById("profile-row")) {
                let usersHTML = "";
                const url = `http://127.0.0.1:8000/api/get_profile`;
                const favorites = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
                favorites.data.data.map(profile => {
                    usersHTML += profileimp(profile);
                })

                if (document.getElementById("profile-row")) {
                    document.getElementById("profile-row").innerHTML = usersHTML;
                }
            }
        }
    

