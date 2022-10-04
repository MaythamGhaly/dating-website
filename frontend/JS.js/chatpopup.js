export const chatPopup = async (user_id) => {
    if (document.getElementById("chat_popup")) {
        document.getElementById("chat_popup").classList.remove('hidden');

        let message
        let sender_id
        let receiver_id
        const url = `http://127.0.0.1:8000/api/get_messages`;
        const users = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        users.data.data.map(user => {
            sender_id = user.sender_id
            receiver_id = user.receiver_id
            message = user.message
            if (sender_id == user_id) {
                const user_message = document.createElement("li");
                user_message.classList.add("receiver");
                user_message.innerHTML = message;
                document.getElementById("chat-box").append(user_message)
            }
            if (receiver_id == user_id) {
                const user_message = document.createElement("li");
                user_message.classList.add("sender");
                user_message.innerHTML = message;
                document.getElementById("chat-box").append(user_message)
            }

        })

        document.getElementById('msg-send').addEventListener('click', async () => {
            const message = document.getElementById('msg').value;
            const url = 'http://127.0.0.1:8000/api/add_messages';

            const data = JSON.stringify({
                message,
                receiver_id: document.getElementById("user-id").getAttribute("user-id")
            });
            const msg = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
            if(typeof msg.data.jwt !== "undefined"){
                localStorage.setItem("token",msg.data.jwt);
                const user_message = document.createElement("li");
                user_message.classList.add("sender");
                user_message.innerHTML = message;
                document.getElementById("chat-box").append(user_message)
            }
        })


        document.getElementById("close-btn").addEventListener("click", () => {
            document.getElementById("chat_popup").classList.add('hidden');
            document.getElementById("chat-box").innerHTML = ""
        })
    }
    // let productTitle = document.getElementById("product-popup-title");
    // let productPrice = document.getElementById("product-popup-price");
    // let productDescription = document.getElementById("product-popup-description");
    // let productPicture = document.getElementById("product-popup-picture");

    // //Get product from database
    // const url = "http://localhost/ecommerce/ecommerce-server/receive-product.php";
    // const response = await axios.post(url, {product_id: product_id}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    // let dataResponse = (response.data['product_info'][0]);

    // //Update popup
    // productTitle.innerHTML = (dataResponse.name);
    // productPrice.innerHTML = (dataResponse.price) + ("$");
    // productPicture.setAttribute('src', dataResponse.picture_url);
    // productDescription.innerHTML = ("Seller Name: ") + (dataResponse.seller_name);
    // //productPicture.innerHTML = (dataResponse.name);


    // //Increment views on picture
    // const url2 = "http://localhost/ecommerce/ecommerce-server/increment-productview.php";
    // const response2 = await axios.post(url2, {product_id: product_id}, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
    // console.log(response2);
}