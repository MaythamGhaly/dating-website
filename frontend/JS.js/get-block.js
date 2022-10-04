import {blockimp} from "./block.js"
import {removeBlock} from "./remove-blocks.js"

export const getBlock =async (id)=>{
   

    if (document.getElementById("block-row")) {
        let usersHTML = "";
        const url = `http://127.0.0.1:8000/api/get_blocks`;
        const blocks = await axios.get(url, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
        blocks.data.data.map(block => {
            usersHTML += blockimp(block);
        })

        if (document.getElementById("block-row")) {
            document.getElementById("block-row").innerHTML = usersHTML;
        }

        const users_section = Array.prototype.slice.call(document.getElementsByClassName("block-remove"));
        users_section.forEach(user => {
            user.addEventListener("click", (e) => {
                let id = (e.currentTarget.parentElement.id);
                removeBlock(id);

            })
        });
}
}