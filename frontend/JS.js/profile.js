export const profileimp = (profile) => {
    return (`<div class="card" id ="${profile.id}">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYG6QToeBt7Ve1DD1NzX30tjG-0M_EENdIhtOvmSjZ&s"
        alt="John" id="profile-picture-card" style="width:100%">
    <h1 id="profile-card-name">${profile.name}</h1>
    <p id="profile-card-email" class="title">${profile.email}</p>
    <p id="profile-card-email" class="title">${profile.gender}</p>
    <p id="profile-card-email" class="title">${profile.bio}</p>
    <p id="profile-card-email" class="title">${profile.age}</p>
    <p id="profile-card-email" class="title">${profile.laitude}</p>
    <p id="profile-card-email" class="title">${profile.longitude}</p>


</div>`)
}