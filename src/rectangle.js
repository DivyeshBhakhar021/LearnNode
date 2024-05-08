const areaOfRectangle = (h, w) => {
    return h * w
}

const perimeterOfRectangle = (h, w) => {
    return 2 * (h + w)
}

// module.exports = {
//     areaOfRectangle,
//     perimeterOfRectangle
// }

module.exports = (h, w, callback) => {    
    if (h <= 0 || w <= 0) {
        callback(new Error('Lenght is below 0'));
    } else {
        callback(null, areaOfRectangle(h, w), perimeterOfRectangle(h, w));
    }
}