// src/mapper.js

function mapper(setup_arr) {
    const arr = [];

    for (let key in setup_arr) {
        const value = setup_arr[key];

        value.forEach((val) => {
            if (key < val) {
                arr.push({ [key + val]: value });
            } else {
                arr.push({ [val + key]: value });
            }
        });
    }

    return arr;
}

module.exports = mapper;
