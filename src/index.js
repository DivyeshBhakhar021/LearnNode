const rect = require('./rectangle')

// console.log('Area Of Rectangle, rect.areaOfRectangle(10, 30))
// console.log('Parameter of Rectangle', rect.perimeterOfRectangle(10, 20))

// const solveAllProbs = (w, h) => {
//     if (w <= 0 || h <= 0) {
//         console.log(new Error('Lenght is below 0'));
//     } else {
//         console.log(rect.areaOfRectangle(h, w));
//         console.log(rect.perimeterOfRectangle(h, w));
//     }
// }

// solveAllProbs(10, 20)

// rect(20, 40, (err, area, perimeter) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Area Of Rectangle', area);
//         console.log('Parameter of Rectangle', perimeter);
//     }
// })

    // rect(3000,(error,data)=>{
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Salary:- ',data);
    //     }
    // })

    // rect(8000, (error, bonusAmount) => {
    //     if (error) {
    //         console.error("Error occurred:", error);
    //     } else {
    //         console.log("Employee bonus amount:", bonusAmount);
    //     }
    // });


    const salary = require('./bonus')

    salary(100,(error,salaryOBJ)=>{
        if (error) {
                console.log(error);
        } else {
            console.log("Bouns :-",salaryOBJ);
        }
    })