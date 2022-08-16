const store = require('./store');

function getUser(filterUser) {
    return store.get(filterUser);
}

function addUser(name) {
    if(!name){
        return Promise.reject('Invalid name');
    }

    const user = {
        name,
    };

    return store.add(user);
}

module.exports = {
    addUser,
    getUser,
}