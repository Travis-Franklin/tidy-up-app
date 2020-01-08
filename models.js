const db = [];

function all(){
    return [
        ...db];
}

function create(name, givesJoy){
    const newItem = {
        name,
        givesJoy
    }
    db.push(newItem);
}

const stuff = {
    all,
    create
}

// const users = {
//     allUsers,
//     signup, 
//     login
// }

module.exports = {
    stuff,
    // users
}