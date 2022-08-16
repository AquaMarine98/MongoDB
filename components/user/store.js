const Model = require('./model');

function getUser(filterUser) {
    let user = {};
    if(filterUser !== null) {
        user = { name: filterUser };
    }
    let users = Model.find(user);
    return users;
}

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

module.exports = {
    get: getUser,
    add: addUser,
    // ... get, update, delete
}