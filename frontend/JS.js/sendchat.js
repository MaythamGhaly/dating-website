export const sendChats = async (receiver_id, chat_message) => {
    const url = `http://127.0.0.1:8000/api/add_messages`;

    let data = ({
        receiver_id,
        message: chat_message
    })
    const msg = await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
    console.log("yes")
    const user_message = document.createElement("li");
    user_message.classList.add("sender");
    user_message.innerHTML = chat_message;
    document.getElementById("chat-box").append(user_message)
}



