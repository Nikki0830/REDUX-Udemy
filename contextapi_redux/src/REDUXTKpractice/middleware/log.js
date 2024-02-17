//not the right way to write middleware
// const log = (store,next,action) =>{
//     console.log(action)
//     console.log(next)
//     console.log(store)
// }

// export default log

//so we apply currying here
//(currying-it is a technique to convert a multiple parameter function
//into a function white takes single param)

const log = (store) => (next) => (action) => {
  console.log(action);
  // console.log(next);
  // console.log(store);
  next(action)
};
export default log

//above code is equivalent to this code
// const log = (store) => {
//   return function (next) {
//     return function (action) {
//       console.log(action);
//       console.log(next);
//       console.log(store);
//     };
//   };
// };
// export default log;

// export default log;
