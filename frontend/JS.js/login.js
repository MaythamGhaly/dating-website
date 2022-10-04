
export const LoginValidation = () => {
    document.getElementById("login-btn").addEventListener("click", async () => {
        let email = document.getElementById("login-email").value;
        let password = document.getElementById("login-password").value;
        let data = {
            "email": email,
            "password": password
        }
        const url = "http://127.0.0.1:8000/api/login";
        // console.log(JSON.stringify(data));

        await axios.post(url, data)
            .then(function (response) {
                console.log(response)
                print(response);
            })
            .catch(function (error) {
                geterror();
                console.log(error);
            });
    })
}

function geterror(){
    let errorDiv = document.getElementById("error-login");
        errorDiv.innerHTML = "Wrong Credentials!";
        errorDiv.classList.remove("hidden");
}

function print(response){
    let responseTaken = response;

    if(!response.data.access_token){
        let errorDiv = document.getElementById("error-login");
        errorDiv.innerHTML = "Wrong Credentials!";
        errorDiv.classList.remove("hidden");
    }
    else{

        localStorage.setItem("token", response.data.access_token);
        if(document.getElementById("error-login"))
        document.getElementById("error-login").classList.add("hidden");
        window.location.href = 'http://127.0.0.1:5501/feed.html';
    }
}

if(document.getElementById("login-button") && localStorage.getItem("token")){
  window.location.href = 'http://127.0.0.1:5501/feed.html';
}

//Logout
if(document.getElementById("to-login"))
document.getElementById("to-login").addEventListener("click", () => {
  localStorage.clear("token");
  window.location.href = 'http://127.0.0.1:5501/login.html';
})