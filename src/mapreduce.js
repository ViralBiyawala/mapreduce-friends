// src/mapreduce.js

const setup = require('./setup');
const mapper = require('./mapper');
const group = require('./group');
const reducer = require('./reducer');

function mapreduce(friends) {
    const friends_list = setup(friends);
    const mapped_friends = mapper(friends_list);
    const grouped_friends = group(mapped_friends);
    const reduced = reducer(grouped_friends);

    return reduced;
}

module.exports = mapreduce;
