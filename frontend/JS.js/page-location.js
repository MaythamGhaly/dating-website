export const PageLocations = () => {

    if (document.getElementById("go_to_favorite")) {
        document.getElementById("go_to_favorite").addEventListener("click", () => {
            window.location.href = "../favorite-page.html";
        })
    }

    // if (document.getElementById("to-login")) {
    //     document.getElementById("to-login").addEventListener("click", () => {
    //         window.location.href = "http://127.0.0.1:5501/login.html";
    //     })
    // }

    if (document.getElementById("send-msg")) {
        document.getElementById("send-msg").addEventListener("click", () => {
            window.location.href = "../chat-page.html";
        })
    }

    if (document.getElementById("back-to-feed")) {
        document.getElementById("back-to-feed").addEventListener("click", () => {
            window.location.href = "../feed.html";
        })
    }
}