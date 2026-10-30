// scripts.js · the page. It imports the helpers and draws the results.

// TODO 4: import { getUsers, getUser } from "./api.js";

const loadButton = document.getElementById("load-button");
const userList = document.getElementById("user-list");
const userDetail = document.getElementById("user-detail");

// TODO 5: when loadButton is clicked (async function):
//   - const users = await getUsers();
//   - clear the list: userList.textContent = "";
//   - for each user: createElement("li"), set textContent to user.name,
//     appendChild it to userList

// TODO 6: inside the loop, when an li is clicked (async function):
//   - const details = await getUser(user.id);
//   - show name · email · city in userDetail
