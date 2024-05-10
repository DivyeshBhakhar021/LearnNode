const { error } = require('console');
const fs = require('fs');

// new file 
// console.log(fs.writeFileSync('abc.txt',"hello bro"));

// override thyi  jyi juna data remove thyi jyi 
// console.log(fs.writeFileSync('abc.txt',"hello bro ferj"));

//data add kare
// fs.appendFileSync('abc.txt',"hello bro kase he ap ")


// only read  buffer binary data store
// Buffer is mainly used to store  binrey data
// console.log(fs.readFileSync('abc.txt'));


//conver to string
// console.log(fs.readFileSync('abc.txt').toString());


// rename file
// fs.renameSync('abc.txt','hello.txt')

//strat
// console.log(fs.statSync('hello.txt'));

//copy
// fs.cpSync("hello.txt","abc.txt")

//delet
// fs.unlinkSync("abc.txt");





// fs.mkdir("./src/assets/data",{recursive: true},(error)=>{
//     if (error) {
//         console.log(error);

//     }

//     console.log("file crated");
// })

// fs.writeFile("./src/assets/data/hello.txt","hello guys",(error)=>{
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log("file cratred");
// });

// fs.appendFile("./src/assets/data/hello.txt","abcde",(error)=>{
//     if (error) {
//         console.log(error);
//     }

//     console.log("sucees");
// })


// fs.writeFile("./src/assets/data/hello.txt","fbhedskhferufgfber",(error)=>{
//     if (error) {
//         console.log(error);
//         return;
//     }

//     console.log("file cratred");
// });


// fs.readFile("./src/assets/data/hello.txt",(error ,data)=>{
//     if (error) {
//         console.log(error);
//     }

//     console.log(data.toString());
// })

// fs.rename("./src/assets/data/hello.txt","./src/assets/data/abc.txt",(error)=>{
//     if (error) {
//         console.log(error);
//     }
// })

// fs.unlink("./src/assets/data/hello.txt",(error)=>{
//     if (error) {
//                 console.log(error);
//             }
// })

fs.stat("./src/assets/data/abc.txt", (error,data) => {
    if (error) {
        console.log(error);
    }

    console.log(data);
})