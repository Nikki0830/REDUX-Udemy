import React from "react";
// import { compose, pipe } from "lodash/fp";
import { pipe } from "lodash/fp";
import { produce } from "immer";

const RindexU = () => {
  // console.log("resux udemy");

  function greeting() {
    return "Good morning";
  }
  let message = greeting;

  // function printMessage(fun) {
  //   console.log(fun);
  // }
  // printMessage(message());
  // printMessage(greeting());
  // function printMessage(fun){
  //   console.log(message())
  // }
  // printMessage()
  function printMessage(fun) {
    console.log(fun());
  }
  printMessage(message);

  function returnFun() {
    return function () {
      return "Good Morning😊";
    };
  }

  let funvar = returnFun();
  let msg = funvar();
  console.log(msg);

  //higher order function

  let arr = [1, 2, 4, 6, 7];
  const data = arr.map((x) => x * 2);
  console.log(data);

  //function compposition
  let msg1 = " Nikki nikki ";
  let msg2 = "Hello " + msg1.trim() + " Good morning";
  console.log(msg2);

  //in function programming
  let trimMsg = (name) => name.trim();
  // let pMsg = (name) => "Hello " + name + "gm";
  let pMsg = (name) => `Hello ${name} good morning`;

  const convertToUper = (name) => name.toUpperCase();
  // const result = pMsg(convertToUper(trimMsg(msg1)));
  // const result = pMsg(msg1);
  // console.log(result);

  //solve this composition
  //problemn(complex parathesis structutre)
  // const newValue = compose(pMsg, convertToUper, trimMsg);
  const newValue = pipe(trimMsg, convertToUper, pMsg);
  const result = newValue(msg1);
  console.log(result);

  //Currying in functional programming

  // let pMsg1 = (name) => `Hello ${name}`;
  // console.log(pMsg1(msg1))

  // const trimMsg1 = (name) => name.trim();
  // const pMsg3 = (msg, name) => `Hello ${name} ${msg}`;
  // const convertToUper2 = (name) => name.toUpperCase();

  // const newValue1 = pipe(trimMsg1, convertToUper2, pMsg3);
  // const result1 = newValue1(msg1);
  // console.log(result1);

  ///currying code
  let multi = function (a) {
    return function (b) {
      return a * b;
    };
  };
  // let result5 = multi(2);
  let result5 = multi(2)(6);
  console.log(result5);

  //currying with arrow function
  let multiple = (x) => {
    return function (y) {
      console.log(x * y);
    };
  };
  // let multiple = (a) => (b) => a * b;
  let result6 = multiple(2);
  result6(4);
  // multiple(2)(10)

  //applying currying
  const trimMsg1 = (name) => name.trim();
  const pMsg3 = (msg) => (name) => `Hello ${name} ${msg} `;
  const convertToUper2 = (name) => name.toUpperCase();

  const newValue1 = pipe(trimMsg1, convertToUper2, pMsg3("good morning"));
  const result1 = newValue1(msg1);
  console.log(result1);

  //Imutability in objects with Object.assign()

  const user = { name: "Nikki", age: 25 };
  const newUser = Object.assign({}, user, { name: "Nikita" });
  console.log(user);
  console.log(newUser);

  //immutabily in objects with spread operator
  const user2 = { name: "Nikita Patel", age: 25 };
  const newUser2 = {
    ...user2, //it will copy all propersties of user
    name: "NIKKI PATEL",
  };
  console.log(user2);
  console.log(newUser2);

  //addd one more obj which is an object
  const user3 = {
    name: "Nikita Patel",
    age: 25,
    company: { country: "INDIA", city: "Bangalore" },
  };
  // const newUser3 = {
  //   ...user3,
  //   name: "NIKKI NIKKI",
  //   //udpate company obj here
  //   company: { ...user3.company, city: "Berlin" },
  // };//same thing with immmer(to deal immutability of objects and arrrays)
  const newuser4 = produce(user3, (draftState) => {
    draftState.name = "REEMA";
    draftState.company.city = "BERLIN";
  });

  // newUser3.company.city = "Berlin"; //by dpoing this we get
  //value in both the objc because user3 and
  //newuser3 are both in same address
  console.log(user3);
  console.log(newuser4);

  //immutability with arrays
  const num = [1, 2, 3, 4, 5];
  //change value in a specific place
  const index = num.indexOf(4);
  const newNum = [...num.slice(0, index), 50, ...num.slice(index)];
  // const newNum = [50, ...num]; //[...num,50]
  console.log(num);
  console.log(newNum);

  //update the array by map()
  const newv = num.map((x) => (x === 4 ? 50 : x));
  console.log(num);
  console.log(newv);

  //remove item from array with filter()
  const filterv = num.filter((x) => x !== 4);
  console.log(num);
  console.log(filterv);

  const book = {
    author: "xxxxx",
    book2: {
      name: "ggg",
      price: "67",
      rating: 4.5,
    },
  };

  // const newbook = {
  //   ...book,
  //   author:"ttttt",
  //   book2:{...book.book2,name:"444"}
  // }
  const newbook = produce(book, (draftState) => {
    draftState.book2.name = "77777";
    draftState.book2.rating = 5;
  });
  // newbook.book2.name="6666"
  console.log(book);
  console.log(newbook);

  const book2 = ["b1", "b2", "b3"];
  //const index2 = book2.indexOf("b2")
  // const book3 = [...book2.slice(0,1),"b4",...book2.slice(index2)]
  // const book3 = book2.map((x) => (x === "b2" ? "b4" : x));
  const book3 = book2.filter((x) => (x !== "b2"));
  console.log(book2);
  console.log(book3);

  return (
    <div>
      <h1>REDUX UDEMY {message()}</h1>
    </div>
  );
};

export default RindexU;
