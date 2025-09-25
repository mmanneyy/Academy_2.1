// //1
// (async () => {
//   try {
//     await Promise.reject("X");
//   } catch (e) {
//     console.log("C", e);
//   }
//   console.log("done");
// })();
// //C, X, done

// //2
// (async () => {
//   try {
//     return await Promise.reject("R");
//   } catch (e) {
//     console.log("caught", e);
//   }
//   console.log("after");
// })();
// //caught, after, R

// //3
// (async () => {
//   console.log("A");
//   await Promise.resolve().then(() => { throw "B"; });
//   console.log("C");
// })().catch(e => console.log("D", e));
// //A, D, B

//4
Promise.resolve("A")
  .finally(() => console.log("F"))
  .then(v => console.log(v));
//F, A