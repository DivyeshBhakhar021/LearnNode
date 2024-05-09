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

// module.exports = (h, w, callback) => {    
//     if (h <= 0 || w <= 0) {
//         callback(new Error('Lenght is below 0'));
//     } else {
//         callback(null, areaOfRectangle(h, w), perimeterOfRectangle(h, w));
//     }
// }

// salary.js


// module.exports = (salary, callback) => {

//     let bonch = 0;

//     if (salary < 1000) {
//         callback(null, salary * 0.10); 
//     } else if (salary < 2000) {
//         callback(null, salary * 0.15);
//     } else if (salary > 3000) {
//         callback(null, salary * 0.20); 
//     } else {
//         callback(null, salary); 
//     }
// };


// module.exports = (salary, callback) => {
//     let bonus = 0;

//     if (salary < 10000) {
//         bonus = salary * 0.1;
//     } else if (salary < 20000) {
//         bonus = salary * 0.15;
//     } else if (salary > 30000) {
//         bonus = salary * 0.20;
//     } 
//         callback(null, bonus);
    
// };



