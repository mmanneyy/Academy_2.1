// //1

// function block(seconds) {
//     const start = Date.now();
//     const end = start + (seconds * 1000);
//     while (Date.now() < end) {
        
//     }
// }

// console.log("Start");
// block(3);
// console.log("End");

// //2

// console.log("Start");
// setTimeout(() => console.log("Timeout done"), 2000);
// console.log("End");
//// c.l.() is a synch function, that's why the 'start' will be printed first, 
// then setTimeout will be sdent to macrotask queue, meanwhile second c.l() wil work, 
// and lastly the sdetTimeout will work. That's why we will have the following output:
//Start End (2 sdeconds wait) Timeout done

// //3

// function greetLater(name) {
//         setTimeout(() => console.log(`Hello ${name}`), 2000);
// }

// greetLater("mane");

// //4

// setTimeout(() => {
//    console.log("first");
    
// }, 3000);

// setTimeout(() => {
//     console.log("second");
    
// }, 1000);

// setTimeout(() => {
//     console.log("third");
    
// }, 2000);


// //5

// setTimeout(() => {
//     console.log("barev");
    
// }, 0);

// setTimeout(() => {
//     console.log("karmir");
    
// }, 0);

// setTimeout(() => {
//     console.log("arev");
    
// }, 0);

// //6

// console.log("Dialing...");

// setTimeout(() => {
//     console.log("Ringing...");
    
// }, 2000);

// setTimeout(() => {
//     console.log("Call Connected");
    
// }, 3000);

// //7

// function boilWater(callback) {
//     console.log("Boiling water...");
    
//     setTimeout(() => {
//         callback();
//     }, 3000);
// }

// function water() {
//     console.log("Water is ready!");
    
// }

// boilWater(water);

// //8

// function boilWater(callback) {
//     console.log("Boiling water");
    
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }



// function addPasta(callback) {
//     console.log("Adding pasta");
    
//     setTimeout(() => {
//         callback();
//     }, 1000);
// }

// boilWater(()=> {
//     addPasta(() => {
//         console.log("Pasta is cooking...");
//     })
// })

// //9

// console.log("start");

// setTimeout(() => {
//     console.log("Random msg");
    
// }, Math.floor(Math.random() * 5000));

// //10

// setTimeout(() => {
//     console.log("3...");
//     setTimeout(() => {
//         console.log("2..");
//         setTimeout(() => {
//             console.log("1...");
//             setTimeout(() => {
//                 console.log("go");
                
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// //11

// function timing() {
//     console.log("task started");
//     const start = Date.now();

//     setTimeout(() => {
//         console.log("task finished");
//         let end = Date.now();
//         let delay = end - start;
//         console.log(delay);
        
//     }, 2000);
    
// }

// timing();

// //12  --????????

// function wait(ms, callback) {
//     let start = Date.now();

//     while(ms > 0) {
//         ms--;
//         start++;
//     }
//     callback();
// }

// wait(2000, () => console.log("Executed after 2 seconds"));

// //13  

// //html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
//     <button id="click" style="background-color: white; padding: 10 20;">Click here</button>
//     <script src="domTimer.js"></script>
// </body>
// </html>

// //js 
// let btn = document.getElementById("click");
// btn.addEventListener('click', () => {
//     btn.textContent = "Processing..."
    
//     setTimeout(() => {
//         btn.textContent = "done!"
    
//     }, 2000);
// })


//14

