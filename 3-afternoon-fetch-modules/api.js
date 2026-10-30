// api.js · the helper functions. They talk to the API.
// Open with Live Server. Modules don't work from a double-click.

const BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO 1: async function getUsers()
async function getUsers(){
    //   - await fetch(BASE_URL + "/users")
    const res = await fetch(BASE_URL + "/users");
    //   - await res.json()
    const users = await res.json();
    //   - return the users
    return users;
}

// TODO 2: async function getUser(id)
async function getUser(id){
    const res = await fetch(BASE_URL + "/users/" + id);
    //   - same idea, with BASE_URL + "/users/" + id
    const user = await res.json();
    return user;
}

// TODO 3: share both functions at the bottom:
  export { getUsers, getUser };
