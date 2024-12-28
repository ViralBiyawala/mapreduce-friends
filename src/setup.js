// src/setup.js

function setup(arr) {
    const friends = {};

    arr.forEach(([user1, user2]) => {
        if (!friends[user1]) {
            friends[user1] = [];
        }
        if (!friends[user2]) {
            friends[user2] = [];
        }
        friends[user1].push(user2);
        friends[user2].push(user1);
    });

    return friends;
}

module.exports = setup;
