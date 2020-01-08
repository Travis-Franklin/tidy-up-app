const bcyrpt = require('bcryptjs');
const userDB = [];
const db = [];

function createHash(password) {
    const salt = bcyrpt.genSaltSync(10);
    return bcyrpt.hashSync(password, salt);

}

function createUser(username, password) {
    const hash = createHash(password);
    const newUser = {
        username,
        hash
    };
    console.log(newUser);
    userDB.push(newUser);
}

function getUser(username) {
    return userDB.find(user => user.username == username)
}


function login(username, password) {
    const theUser = getUser(username);
    return bcyrpt.compareSync(password, theUser.hash);
}


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

const users = {
    create: createUser,
    login
};

// const users = {
//     allUsers,
//     signup, 
//     login
// }

module.exports = {
    stuff,
    users
    // users
}