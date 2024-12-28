// src/group.js

function group(mapped_arr) {
    const obj = {};

    mapped_arr.forEach(val => {
        const key = Object.keys(val)[0];
        if (!obj[key]) {
            obj[key] = [];
        }
        obj[key].push(Array.from(val[key]));
    });

    return obj;
}

module.exports = group;
