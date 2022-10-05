export const register = () => {

    // function to take the latitude and logitude from user
    const successCallback = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        document.getElementById("lat").innerHTML = latitude
        document.getElementById("lon").innerHTML = longitude
    };

    const errorCallback = (error) => {
        document.getElementById("lat").innerHTML = "error"
    };
    if (document.getElementById("get-location")) {
        document.getElementById("get-location").addEventListener("click", async () => {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        })
    }

    // Register function
    if (document.getElementById("registerr")) {
        document.getElementById("registerr").addEventListener("click", async () => {
            let name = document.getElementById('name').value
            let email = document.getElementById('email').value
            let password = document.getElementById('password').value
            let gender = document.getElementById('gender').value
            let gender_intersted = document.getElementById('gender_intersted').value
            let bio = document.getElementById('bio').value
            let age = document.getElementById('age').value
            let profile_picture = document.getElementById('profile_picture').value
            let latitude = document.getElementById('lat').innerHTML
            let longitude = document.getElementById('lon').innerHTML

            let data = {
                "name": name,
                "email": email,
                "password": password,
                "gender": gender,
                "gender_interested": gender_intersted,
                "bio": bio,
                "age": age,
                "profile_picture": profile_picture,
                "latitude": latitude,
                "longitude": longitude
            }
            console.log(data)
            const url = `http://127.0.0.1:8000/api/register`;
            await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } })
                .then(function (response) {
                    console.log(response)
                    window.location.href = 'http://127.0.0.1:5501/login.html';
                })
                .catch(function (error) {
                    geterror();
                    console.log(error);
                });
        })
    }
}
