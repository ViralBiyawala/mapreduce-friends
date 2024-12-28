// src/reducer.js

function reducer(grouped_obj) {
    const reduced_obj = {};

    for (let key in grouped_obj) {
        reduced_obj[key] = grouped_obj[key].reduce((prevArr, currArr) => {
            return prevArr.filter(element => currArr.includes(element));
        });
    }

    return reduced_obj;
}

module.exports = reducer;
