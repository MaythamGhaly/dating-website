export const blockimp = (block) => {
    return (`<div class="card" id ="${block.id}">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYG6QToeBt7Ve1DD1NzX30tjG-0M_EENdIhtOvmSjZ&s"
        alt="John" id="profile-picture-card" style="width:100%">
    <h1 id="profile-card-name">${block.name}</h1>
    <p id="profile-card-email" class="title">${block.email}</p>
    <p id="profile-card-email" class="title">${block.gender}</p>
    <p id="profile-card-email" class="title">${block.bio}</p>
    <p id="profile-card-email" class="title">${block.age}</p>
    <p id="profile-card-email" class="title">latitude: ${block.latitude}</p>
    <p id="profile-card-email" class="title">longitude: ${block.longitude}</p>


    <span id="" class="block-remove pointer color_blue">
        &#9950; remove from block!
    </span>
    <span id="send-msg" class="pointer color_green">
        &#128389; send a message
    </span>
</div>`)
}