const Model = require('./model');

function getChat(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if(filterUser !== null) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if(error) {
                    reject(error);
                    return false;
                }

                resolve(populated);
            }
        )
    })
}

function addChat(chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

module.exports = {
    get: getChat,
    add: addChat,
}