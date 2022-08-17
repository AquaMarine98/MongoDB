const store = require('./store');

function getChat(chatId) {
    return store.get(chatId);
}

function addChat(users) {
    if(!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }

    const chat = {
        users: users,
    };
    return store.add(chat);
}

module.exports = {
    getChat,
    addChat,
}