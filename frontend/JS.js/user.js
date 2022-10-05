export const userimp = (user) => {
    return (`<div class="card" id="${user.id}">
    <img src="${user.profile_picture}"
        alt="John" id="profile-picture-card" style="width:100%">
    <h1 id="profile-card-name">${user.name}</h1>
    <p id="profile-card-email" class="title">${user.email}</p>
    <p id="profile-card-email" class="title">${user.gender}</p>
    <p id="profile-card-email" class="title">${user.bio}</p>
    <p id="profile-card-email" class="title">${user.age}</p>
    <p id="profile-card-email" class="title">latitude : ${user.latitude}</p>
    <p id="profile-card-email" class="title">longitude : ${user.longitude}</p>


    <span id="favorite-icon" class="favorite-icon pointer color_blue">
        &#9733; add to favorite!
    </span>
    <span id="" class="blocks-icon pointer color_blue">
        &#9950; block
    </span>
    <span id="send-msg" class="sendmsg pointer color_green">
        &#128389; send a message
    </span>
</div>`)
}