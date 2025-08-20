// //1

// function handleRequest(clientId, delay) {
//     console.log(`Handling ${clientId}`);
    
//     setTimeout(() => {
//         console.log(`${clientId} responded`);
        
//     }, delay);
// }



// handleRequest("client1", 3000);
// handleRequest("client2", 1000);
// handleRequest("client3", 2000);

// //2

// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//             setTimeout(() => {
//                 console.log("3");
                
//             }, 0);
//     }, 1000);
// }, 2000);

// //3

// function countDown(n) {
//     if(n == 0) return;
//     setTimeout(() => {
//         console.log(n);
//         countDown(--n);
//     }, 1000)
// }
   
// countDown(5);