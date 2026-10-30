// scripts.js · the page. It imports the helpers and draws the results.

// TODO 4: import { getUsers, getUser } from "./api.js";
import { getUsers, getUser } from "./api.js";

const loadButton = document.getElementById("load-button");
const userList = document.getElementById("user-list");
const userDetail = document.getElementById("user-detail");

// TODO 5: when loadButton is clicked (async function):
loadButton.addEventListener("click", async function(){
    const users = await getUsers();
    userList.textContent = "";
    for( const user of users ){
        const li = document.createElement("li");
        li.textContent = user.name;

        li.addEventListener("click", async function(){
            const details = await getUser(user.id);
            userDetail.textContent = `${details.name} * ${details.email} * ${details.address.city}`;
        });
        userList.appendChild(li);
    };
});
//   - const users = await getUsers();
//   - clear the list: userList.textContent = "";
//   - for each user: createElement("li"), set textContent to user.name,
//     appendChild it to userList

// TODO 6: inside the loop, when an li is clicked (async function):
//   - const details = await getUser(user.id);
//   - show name · email · city in userDetail
