export const favoriteimp = (favorite) => {
    return (`<div class="card" id ="${favorite.id}">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYG6QToeBt7Ve1DD1NzX30tjG-0M_EENdIhtOvmSjZ&s"
        alt="John" id="profile-picture-card" style="width:100%">
    <h1 id="profile-card-name">${favorite.name}</h1>
    <p id="profile-card-email" class="title">${favorite.email}</p>
    <p id="profile-card-email" class="title">${favorite.gender}</p>
    <p id="profile-card-email" class="title">${favorite.bio}</p>
    <p id="profile-card-email" class="title">${favorite.age}</p>

    <span id="" class="favorite-remove pointer color_blue">
        &#9733; remove from favorite!
    </span>
    <span id="" class="pointer color_blue">
        &#9950; block
    </span>
    <span id="send-msg" class="pointer color_green">
        &#128389; send a message
    </span>
</div>`)
}